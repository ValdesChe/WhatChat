import Vue from "vue/dist/vue.js"
import Vuex from "vuex"
import axios from 'axios';


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
  strict:true,
  state: {
    contactLoader: false,
    conversationLoader: false,

    conversations: {}
  },

  getters:{
    getContactLoader: (state) => {
      return state.contactLoader
    },

    getConversationLoader: (state) => {
      return state.conversationLoader
    },

    getConversationWith: (state) => (id_contact) => {
      //console.log("getConvers");
      for (const [key, value] of Object.entries(state.conversations)) {
        console.log(key, id_contact);
        if ( key == id_contact )
          return value
      }

      return null
      
    },

    conversations: function (state) {
      return state.conversations;
    }

  },

  mutations: {
    SWITCH_CONTACT_LOADER(state) {
      state.contactLoader = !state.contactLoader
    },

    SWITCH_CONVERSATION_LOADER(state) {
      state.conversationLoader = !state.conversationLoader
    },
    addMessages: function (state , {conversations}) {
      let obj = {}
      conversations.forEach(function (conversation) {
        obj[conversation.id] = conversation
      })

      state.conversations = obj
    }

  },
  actions: {
    switchContactLoader({commit, dispatch,  getter , rootGetter}, {payload} ) {
      commit(SWITCH_CONTACT_LOADER)
    },

    switchConversationLoader({commit, dispatch,  getter , rootGetter}, {payload} ) {
      commit(SWITCH_CONVERSATION_LOADER)
    },

    loadConversations(context){
      axios.get("/users")
        .then(function (resp){
           console.log(resp.data);
           context.commit('addMessages', {conversations: resp.data.users})

        }, function (err) {
           console.log("Error");
           console.log(err.response);
           // context.errorServer = err.response.data.errors.detail
        })
    }
  }
})

export default store
