import Vue from 'vue/dist/vue.js'
import Vuex from 'vuex'
import axios from 'axios'
import optionListener from './../components/utils/optionMenuListener';
Vue.use(Vuex)
import 'babel-polyfill'

import {Socket , Presence} from 'phoenix'
/***
*   {
*     1:{
        id:1,
        username: "ValdoR"
        unread: 2,
        count:100
        messages: [
          {
            id: 22,
            from_id: 3
            to_id:1
          },
        ]
      },
      ...

*   }
*/
window.Presence = Presence

const syncPresentUsers = (context, presences) => {
  const participants = [];
  Presence.list(presences).map( p => {
    const participant = p.metas[0]
    if(context.getters.getCurrentUser.id != participant.id){
      // const channel = socket.channel(`chat:${auth}:`);
      participants.push(participant)
    }
  })
  context.dispatch('loadOnlineUsers', participants);
}


const store = new Vuex.Store({
  strict: true,
  state: {
    currentUser: null,
    socket: null,
    channel: null,

    // The current conversation opened : It's a participant
    currentConversation: null,
    AllContacts: [],

    OnlineUsers:[],

    conversations: {},

    contactLoader: false,
    conversationLoader: false

  },

  getters: {
    getCurrentUser: (state) => {
      return state.currentUser
    },

    getSocket: (state) => {
      return state.socket
    },

    getChannel: (state) => {
      return state.channel
    },

    getOnlineUsers: (state) => (filterName, filterValue) => {
      switch (filterName) {
        case 'all':
          return state.OnlineUsers
        break

        // Bring back one contact
        case 'one':
          return state.OnlineUsers.find((participant) => {
            return participant.id == filterValue
          })
        break

        case 'ordered':
          switch (filterValue) {
            case 'asc':
              return state.OnlineUsers.sort((participantA, participantB) => {
                return participantA.username > participantB.username
              })
              break
            case 'desc':
              return state.OnlineUsers.sort((participantA, participantB) => {
                return participantA.username.toLowerCase() < participantB.username.toLowerCase()
              })
              break
            default :
          }
        break

        default:
          return state.OnlineUsers
      }
      return state.OnlineUsers
    },

    filteredAllContacts: (state) => (filterName, filterValue) => {
      
      switch (filterName) {
        case 'all':
          return state.AllContacts
        break

        // Bring back one contact
        case 'one':
          return state.AllContacts.find((participant) => {
            return participant.id == filterValue
          })
        break

        case 'ordered':
          const list = state.AllContacts.filter(contact => {
            return contact.id != state.currentUser.id
          })
          switch (filterValue) {
            case 'asc':
              return list.sort((participantA, participantB) => {
                return participantA.username[0].toLowerCase() > participantB.username[0].toLowerCase()
              })
            break
            case 'desc':
              return list.sort((participantA, participantB) => {
                return participantA.username[0].toLowerCase() < participantB.username[0].toLowerCase()
              })
            break
            default :
              return list.sort((participantA, participantB) => {
                return participantA.username[0].toLowerCase() > participantB.username[0].toLowerCase()
              })
          }
        break

        default:
          return state.AllContacts
      }
      return state.AllContacts
    },

    currentConversation(state){
      return state.currentConversation
    },

    getContactLoader: (state) => {
      return state.contactLoader
    },

    getConversationLoader: (state) => {
      return state.conversationLoader
    },

    conversations: function (state) {
      return state.conversations
    }


  },

  mutations: {
    SWITCH_CONTACT_LOADER (state) {
      state.contactLoader = !state.contactLoader
    },
    SWITCH_CONVERSATION_LOADER (state) {
      state.conversationLoader = !state.conversationLoader
    },
    SET_ONLINE_USERS: function (state, { OnlineUsers }) {
      state.OnlineUsers = OnlineUsers
    },
    addAllContacts: function (state, { AllContacts }) {
      let obj = {}
      state.AllContacts = AllContacts.filter(function (conversation) {
        return (conversation.id != state.currentUser.id)
      })
      // state.AllContacts = obj
    },
    // Add new discussion
    SET_DISCUSSION: function (state, { participant }) {
      const index = state.participants.findIndex((element) => {
        return element.id == participant.participant.id
      })
      if (index === -1) {
        console.log(participant.participant)
        state.participants.push(participant.participant)
      }
    },
    // edit a participant
    EDIT_PARTICIPANT: function (state, { participant }) {
      state.participants = state.participants.filter((element) => {
        if (element.id === participant.id) {
          element = participant
        }
        return true
      })
    },
    // Delete one participant
    REMOVE_PARTICIPANT: function (state, { participant }) {
      state.participants = state.participants.filter((element) => {
        return (element.id !== participant.id)
      })
    },
    SET_CURRENT_USER: function (state, { user }) {
      state.currentUser = user
    },
    // Current Conversing With
    SET_OPENED_DISCUSSION (state, {discussions_id}){
      console.log(discussions_id);
      state.currentConversation = discussions_id
    }
  },
  actions: {
    switchContactLoader: async function ({ commit, dispatch, getter, rootGetter }, { payload }) {
      commit('SWITCH_CONTACT_LOADER')
    },
    switchConversationLoader: async function  ({ commit, dispatch, getter, rootGetter }, { payload }) {
      commit('SWITCH_CONVERSATION_LOADER')
    },

    setCurrentUser: async function (context, action) {
      // socket: action.socket, channel: action.channel, currentUser: action.currentUser
      // console.log(context)
      // context.commit('SET_MY_SOCKET', { socket: action.socket })
      context.commit('SET_CURRENT_USER', { user: action.currentUser })


      let presences = {};

      const socket = new Socket('/socket', {
        params: {
          token: localStorage.getItem('token')
        }
      });

      socket.connect();

      // var channel = socket.channel("rooms:lobby", {})
      // const channel = socket.channel(`users:${localStorage.getItem('id_token')}`);
      const channel = socket.channel(`users:join`);
     
      channel.on("presence_diff", (response) => {
        presences = Presence.syncDiff(presences, response);
        console.log("Diff Called");
        syncPresentUsers(this, presences);
      })

      channel.on("presence_state", (response)=>{
        console.log("State Called");
        presences = Presence.syncState(presences, response);
        // console.log(presences);
        
        syncPresentUsers(this, presences);
        optionListener.menuListener()
      })

      channel.on("user:joined", (response) => {
        console.log("User Joined Received")
        syncPresentUsers(this, presences);
      }) 

      if (channel.state != 'joined') {
        channel.join().receive('ok', (response) => {
          window.socket = socket
          console.log(response);
        });

      } else {
        this.$router.push("{name: 'logout'}")
        console.log("Something went wrong");
        return;
      }


    },
    
    loadOnlineUsers: async function  (context, OnlineUsers) {
      context.commit('SET_ONLINE_USERS', { OnlineUsers })
    },

    addDiscussion: async function  (context, discussion) {
      context.commit('ADD_DISCUSSION', { discussion: discussion })
    },

    removeDiscussion: async function  (context, id_discussion) {
      context.commit('REMOVE_DISCUSSION', {
        discussion: id_discussion
      })
    },

    editDiscussion: async function  (context, id_contact) {
      context.commit('EDIT_DISCUSSION', {
        discussion: id_discussion
      })
    },

    // CurrentConversation | Chat opened 
    setOpenedConversations: async function  (context, discussions_id ) {
      
      context.commit('SET_OPENED_DISCUSSION', {discussions_id})
    },

    loadAllContacts: async function  (context) {
      axios.get('/users')
        .then(function (resp) {
          console.log(resp.data)
          context.commit('addAllContacts', { AllContacts: resp.data.users })
        }, function (err) {
          console.log('Error')
          console.log(err.response)
          
        })
    },
  }
})

export default store
