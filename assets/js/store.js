import Vue from 'vue/dist/vue.js'
import Vuex from 'vuex'
import axios from 'axios'
import optionListener from './../components/utils/optionMenuListener';
Vue.use(Vuex)
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


const store = new Vuex.Store({
  strict: true,
  state: {
    currentUser: null,
    socket: null,
    channel: null,

    // The current conversation opened : It's a participant
    currentConversation: null,
    participants: [],

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

    getParticipants: (state) => (filterName, filterValue) => {
      switch (filterName) {
        case 'all':
          return state.participants
        break

        // Bring back one contact
        case 'one':
          return state.participants.find((participant) => {
            return participant.id == filterValue
          })
        break

        case 'ordered':
          switch (filterValue) {
            case 'asc':
              return state.participants.sort((participantA, participantB) => {
                return participantA.username > participantB.username
              })
              break
            case 'desc':
              return state.participants.sort((participantA, participantB) => {
                return participantA.username.toLowerCase() < participantB.username.toLowerCase()
              })
              break
            default :
          }
        break

        default:
          return state.participants
      }
      return state.participants
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

    getConversationWith: (state) => (id_contact) => {
      // console.log("getConvers");
      for (const [key, value] of Object.entries(state.conversations)) {
        console.log(key, id_contact)
        // eslint-disable-next-line eqeqeq
        if (key == id_contact) { return value }
      }
      return null
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
    addMessages: function (state, { conversations }) {
      let obj = {}
      conversations.forEach(function (conversation) {
        obj[conversation.id] = conversation
      })

      state.conversations = obj
    },

    // Add a participant
    SET_PARTICIPANT: function (state, { participant }) {
      const index = state.participants.findIndex((element) => {
        return element.id == participant.participant.id
      })
      if (index === -1) {
        console.log(participant.participant)
        state.participants.push(participant.participant)
      }
    },

    SET_PARTICIPANTS: function (state, { participants }) {
     
      state.participants = participants
      optionListener.menuListener()
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

    SET_MY_SOCKET: function (state, { socket }) {
      state.socket = socket
    },

    SET_CURRENT_USER: function (state, { user }) {
      state.currentUser = user
    },

    // Current Conversing With
    SET_OPENED_CONV (state, {contact}){
      //console.log(contact);
      state.currentConversation = contact
    }



  },
  actions: {
    switchContactLoader ({ commit, dispatch, getter, rootGetter }, { payload }) {
      commit('SWITCH_CONTACT_LOADER')
    },

    switchConversationLoader ({ commit, dispatch, getter, rootGetter }, { payload }) {
      commit('SWITCH_CONVERSATION_LOADER')
    },

    SOCKET_CONNECTED (context, action) {
      // socket: action.socket, channel: action.channel, currentUser: action.currentUser
      // console.log(context)
      context.commit('SET_MY_SOCKET', { socket: action.socket })
      context.commit('SET_CURRENT_USER', { user: action.currentUser })
    },
    
    addParticipants (context, participants) {
      console.log(participants);
      
      context.commit('SET_PARTICIPANTS', { participants })
    },

    addParticipant (context, participant) {
      context.commit('SET_PARTICIPANT', { participant: participant })
    },

    removeParticipant (context, id_contact) {
      context.commit('REMOVE_PARTICIPANT', {
        participant: id_contact
      })
    },

    editParticipant (context, id_contact) {
      context.commit('EDIT_PARTICIPANT', {
        participant: id_contact
      })
    },

    // CurrentConversation | Chat opened 
    setOpenedConv (context, contact ) {
      
      context.commit('SET_OPENED_CONV', {contact})
    },


    loadConversations (context) {
      axios.get('/users')
        .then(function (resp) {
          console.log(resp.data)
          context.commit('addMessages', { conversations: resp.data.users })
        }, function (err) {
          console.log('Error')
          console.log(err.response)
          // context.errorServer = err.response.data.errors.detail
        })
    },





  }
})

export default store
