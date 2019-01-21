import Vue from 'vue/dist/vue.js'
import Vuex from 'vuex'
import axios from 'axios'
import optionListener from './../components/utils/optionMenuListener';
Vue.use(Vuex)
import getIndexes from './helpers/getIndexes';

import 'babel-polyfill'

import {Socket , Presence} from 'phoenix'
import moment from 'moment'
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

    conversations: [],

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
      let indexConv = -1
      indexConv = state.conversations.findIndex(conversation => {
        return conversation.id === state.currentConversation;
      })
      if (indexConv != -1) {
        return state.conversations[indexConv]
      }
      return null 
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
    ADD_DISCUSSION: function (state, { discussion }) {
      console.log("MUTATOR ADD_DISCUSSION")
      const index = getIndexes.getElementIndex(state.conversations, discussion.id)
      // If not existing discussion 
      // Then we add 
      if (index === -1) {
        discussion.typing_user = null
        discussion.count = discussion.messages.length
        const latestMessage = {
          content: "Default message",
          inserted_at: moment(discussion.inserted_at)
        }

        // If there are mesages in discussion
        if(discussion.messages.length > 0){

          const messages = discussion.messages.forEach(message =>{
            
            message.inserted_at = moment(message.inserted_at)
            console.log(message.inserted_at)
          })
          
          // Messages are sorted by date
          messages.sort( (message1, message2) => {
            return moment.min(message1.inserted_at , message2.inserted_at ) === message1.inserted_at  ? true :false 
          })

          // We get the last posted message of the discussion
          latestMessage = messages[0]
        }
        // Else : no msg
        discussion.latestMessage = latestMessage

        const discussionPosition = -1;
        state.conversations.forEach((conv , index) => {
          if (moment.min(conv.latestMessage, discussion.latestMessage) === discussion.latestMessage) {
            discussionPosition = index
            return
          }
        })

        if (discussionPosition !== -1) {
          state.conversations.splice(index, 0 , discussion)
        } else {
          state.conversations.push(discussion)
        }

      }
    },

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
      // console.log(discussions_id);
      state.currentConversation = discussions_id
    },

    // Adding message to discussion 
    ADD_MESSAGE_TO_DISCUSSION
    (
      state,  
      {
        discussion_id,
        message
      }
    ){

      const discussionPosition = getIndexes.getElementIndex(state.conversations, discussion_id)
      if(discussionPosition !== -1){

        const discussion = state.conversations[discussionPosition]
        console.log(message);
        
        discussion.count++
        message.id = discussion.count
        discussion.latestMessage = Object.assign({}, message)
        
        discussion.messages.push(message) 
      }

    },


    // Adding typing user flag
    ADD_TYPING_USER(state, { discussion_id, user_id }){

      const discussionPosition = getIndexes.getElementIndex(state.conversations, discussion_id)
      const userPosition = getIndexes.getElementIndex(state.OnlineUsers, user_id)
      if(discussionPosition !== -1 && userPosition !== -1){
        state.conversations[discussionPosition].typing_user = state.OnlineUsers[userPosition].username + " is typing..."
      }
    },
    // Adding typing user flag
    REMOVE_TYPING_USER(state, { discussion_id, user_id }){

      const discussionPosition = getIndexes.getElementIndex(state.conversations, discussion_id)
      const userPosition = getIndexes.getElementIndex(state.OnlineUsers, user_id)
      if(discussionPosition !== -1 && userPosition !== -1){
        state.conversations[discussionPosition].typing_user = null
      }
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
        console.log(presences);
        
        syncPresentUsers(this, presences);
      })

      channel.on("presence_state", (response)=>{
        console.log("State Called");
        presences = Presence.syncState(presences, response);
        console.log(presences);
        
        syncPresentUsers(this, presences);
        optionListener.menuListener()
      })




      if (channel.state != 'joined') {
        channel.join().receive('ok', (response) => {
          window.socket = socket
          // Getting my discussions
          console.log(response.discussions);
          window.channelDiscussion = {}
          response.discussions.forEach(discussion => {
            const channelDiscussion = socket.channel(`conversation:${discussion.id}`)
            if (channelDiscussion.state != 'joined') {
              channelDiscussion.join().receive('ok', (response) => {
                channelDiscussion.on("new_message", response =>{
                  console.log(response)
                })
    
                channelDiscussion.on("conversation:hey_someone_is_typing", response =>{
                  
                  if(response.user_id !== context.getters.getCurrentUser.id)
                    context.commit("ADD_TYPING_USER",
                     { discussion_id: discussion.id, user_id: response.user_id });
                
                })
    
                channelDiscussion.on("conversation:hey_someone_remove_typing", response =>{
                 
                  if(response.user_id !== context.getters.getCurrentUser.id)
                    context.commit("REMOVE_TYPING_USER",
                     { discussion_id: discussion.id, user_id: response.user_id });
                
                })
    
              });
              // console.log(channelDiscussion)
              window.channelDiscussion[discussion.id] = channelDiscussion
            }

            context.dispatch('addDiscussion', discussion)
          });
          
          
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
    setOpenedConversation: async function  (context, discussions_id ) {
       
      await context.commit('SET_OPENED_DISCUSSION', {discussions_id})
    },

    addMessageToDiscussion: async function(
      context,  
      {
        discussion_id,
        from_id,
        content,
      }){
        const message = {
          id: null,
          from_id: from_id,
          conversation_id: discussion_id,
          content: content,
          created_at: moment(),
          inserted_at: moment()
        }
        await context.commit(
          'ADD_MESSAGE_TO_DISCUSSION',
          {
            discussion_id,
            message
          })
            
        
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
