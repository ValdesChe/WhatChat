/* eslint-disable camelcase */
import Vue from 'vue/dist/vue.js'
import Vuex from 'vuex'
import axios from 'axios'
import optionListener from './../components/utils/optionMenuListener'
import getIndexes from './helpers/getIndexes'
import { Action, Mutation, Urls_, setItemsStorage, clearStorage, TOKEN_KEY } from '../auth/index'
import 'babel-polyfill'

import { Socket, Presence } from 'phoenix'
import moment from 'moment'
Vue.use(Vuex)
window.Presence = Presence

const syncPresentUsers = (context, presences) => {
  const participants = []
  Presence.list(presences).map(p => {
    const participant = p.metas[0]
    if (context.getters.getCurrentUser.id !== participant.id) {
      // const channel = socket.channel(`chat:${auth}:`);
      participants.push(participant)
    }
  })
  context.dispatch('loadOnlineUsers', participants)
}

const store = new Vuex.Store({
  strict: true,
  state: {
    // Loader
    appLoaderVisible: false,
    // Auth state
    token: localStorage.getItem(TOKEN_KEY) || '',
    status: '',

    currentUser: null,
    socket: null,
    channel: null,
    // The current conversation opened : It's a participant
    currentConversation: null,
    AllContacts: [],
    OnlineUsers: [],
    conversations: [],
    contactLoader: false,
    conversationLoader: false
  },

  getters: {
    // Auth getters
    isAuthenticated: state => !!state.token,
    authStatus: state => state.status,
    isProcessing: state => state.appLoaderVisible,

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

        // Bring back one contact
        case 'one':
          return state.OnlineUsers.find((participant) => {
            return participant.id === filterValue
          })

        case 'ordered':
          switch (filterValue) {
            case 'asc':
              return state.OnlineUsers.sort((participantA, participantB) => {
                return participantA.username.toLowerCase() > participantB.username.toLowerCase() ? 1 : -1
              })
            case 'desc':
              return state.OnlineUsers.sort((participantA, participantB) => {
                return participantA.username.toLowerCase() < participantB.username.toLowerCase() ? -1 : 1
              })
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

        // Bring back one contact
        case 'one':
          return state.AllContacts.find((participant) => {
            return participant.id === filterValue
          })

        case 'ordered':
          const list = state.AllContacts.filter(contact => {
            return contact.id !== state.currentUser.id
          })
          switch (filterValue) {
            case 'asc':
              return list.sort((participantA, participantB) => {
                return participantA.username[0].toLowerCase() > participantB.username[0].toLowerCase() ? 1 : -1
              })
            case 'desc':
              return list.sort((participantA, participantB) => {
                return participantA.username[0].toLowerCase() < participantB.username[0].toLowerCase() ? -1 : 1
              })
            default :
              return list.sort((participantA, participantB) => {
                return participantA.username[0].toLowerCase() > participantB.username[0].toLowerCase() ? 1 : -1
              })
          }

        default:
          return state.AllContacts
      }
    },

    currentConversation (state) {
      let indexConv = -1
      indexConv = state.conversations.findIndex(conversation => {
        return conversation.id === state.currentConversation
      })
      if (indexConv !== -1) {
        return state.conversations[indexConv]
      }
      return null
    },

    conversations: (state) => (filter, filterSearch) => {
      // Having at l
      let listConv = state.conversations
      switch (filter) {
        // Conversation having at least one message
        case 'atLeastOneMessage':

          return state.conversations.filter(conv => {
            return conv.is_group || (!conv.is_group && conv.messages.length > 0)
          })

        case 'chats':
          return listConv.filter(conv => {
            return !conv.is_group
          }).sort((convA, convB) => {
            const user1 = convA.users.filter(user => { return user.id !== state.currentUser.id })[0]
            const user2 = convB.users.filter(user => { return user.id !== state.currentUser.id })[0]
            return user1.username[0].toLowerCase() > user2.username[0].toLowerCase() ? 1 : -1
          })

        case 'search_chats_groups':
          return listConv.filter(conv => {
            if (conv.is_group) {
              return conv.name.toUpperCase().indexOf(filterSearch) > -1
            } else {
              const user = conv.users.filter(user => { return user.id !== state.currentUser.id })[0]
              return user.username.toUpperCase().indexOf(filterSearch) > -1
            }
          }).sort((convA, convB) => {
            const user1 = convA.users.filter(user => { return user.id !== state.currentUser.id })[0]
            const user2 = convB.users.filter(user => { return user.id !== state.currentUser.id })[0]
            return user1.username[0].toLowerCase() > user2.username[0].toLowerCase() ? -1 : 1
          })

        case 'all':
          return listConv.sort((convA, convB) => {
            return new Date(convA.latestMessage.inserted_at) - new Date(convB.latestMessage.inserted_at) < 0 ? 1 : -1
          })
        default :
          return listConv.filter(conv => {
            return conv.messages.length > 0
          }).sort((convA, convB) => {
            return new Date(convA.latestMessage.inserted_at) - new Date(convB.latestMessage.inserted_at) < 0 ? 1 : -1
          })
      }
    }

  },

  mutations: {
    // Auth mutators
    [Mutation.AUTH_SUCCESS]: (state, user) => {
      state.token = user.token
      state.currentUser = user
    },
    [Mutation.CLEAR_AUTH]: (state) => {
      state.token = null
      state.currentUser = null
    },
    [Mutation.AUTH_ERROR]: (state) => {
      state.status = 'error'
    },

    [Mutation.HIDE_LOADER]: (state) => {
      state.appLoaderVisible = false
    },

    [Mutation.SHOW_LOADER]: (state) => {
      state.appLoaderVisible = true
    },
    // End of Auth mutators

    SET_ONLINE_USERS: function (state, { OnlineUsers }) {
      state.OnlineUsers = OnlineUsers
    },
    addAllContacts: function (state, { AllContacts }) {
      if (state.currentUser) {
        state.AllContacts = AllContacts.filter(function (conversation) {
          return (conversation.id !== state.currentUser.id)
        })
      }
      // state.AllContacts = obj
    },
    // Add new discussion
    ADD_DISCUSSION: function (state, { discussion }) {
      const index = getIndexes.getElementIndex(state.conversations, discussion.id)
      // console.log(discussion)
      // If not existing discussion
      // Then we add
      if (index === -1) {
        discussion.typing_user = null
        discussion.count = discussion.messages.length
        let latestMessage = {
          id: 1000,
          content: '',
          from_id: null,
          inserted_at: moment(discussion.inserted_at).add(-(new Date().getTimezoneOffset()) / 60, 'hours')
        }

        // Setting count unread message to 0 by default
        discussion.unread = 0

        // If there are mesages in discussion
        if (discussion.messages.length > 0) {
          discussion.messages.forEach(message => {
            message.inserted_at = moment(message.inserted_at).add(-(new Date().getTimezoneOffset()) / 60, 'hours')
            message.readers = {}
            message.count_readers = 0
            discussion.users.forEach(user => {
              user.inserted_at = moment(user.inserted_at).add(-(new Date().getTimezoneOffset()) / 60, 'hours')
              if (message.from_id === state.currentUser.id) {
                if (user.read_at) {
                  user.read_at = moment(user.read_at).add(-(new Date().getTimezoneOffset()) / 60, 'hours')
                  if (moment.min(message.inserted_at, user.read_at) === message.inserted_at) {
                    message.readers[user.id] = { reader_id: user.id, reading_time: user.read_at }
                    message.count_readers += 1
                  }
                }
              }

              // If it's someone message
              if (user.id !== state.currentUser.id) {
                const userPos = getIndexes.getElementIndex(discussion.users, state.currentUser.id)
                if (userPos !== -1) {
                  const me = discussion.users[userPos]
                  me.read_at = moment(me.read_at).add(-(new Date().getTimezoneOffset()) / 60, 'hours')

                  if (moment.min(message.inserted_at, me.read_at) !== message.inserted_at) {
                    discussion.unread += 1
                  }
                }
              }
            })
          })

          // Messages are sorted by date
          discussion.messages.sort((message1, message2) => {
            // return moment.min(message1.inserted_at , message2.inserted_at ) === message1.inserted_at  ? true :false
            return moment.min(message1.inserted_at, message2.inserted_at) !== message1.inserted_at ? 1 : -1
          })

          // We get the last posted message of the discussion
          latestMessage = discussion.messages[discussion.count - 1]
        }
        // Else : no msg
        discussion.latestMessage = latestMessage

        // Adding
        state.conversations.push(discussion)
      }
    },

    SET_DISCUSSION: function (state, { participant }) {
      const index = state.participants.findIndex((element) => {
        return element.id === participant.participant.id
      })
      if (index === -1) {
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
    SET_CURRENT_USER: function (state, user) {
      state.currentUser = user
    },
    // Current Conversing With
    SET_OPENED_DISCUSSION (state, { discussions_id }) {
      // console.log(discussions_id);
      state.currentConversation = discussions_id

      /* const discussionPosition = getIndexes.getElementIndex(state.conversations, discussions_id)
      if(discussionPosition !== -1){
        state.conversations[discussionPosition].unread = 0
      } */
    },

    // Reinit conv count unreads
    REINIT_CONVERSATION_UNREAD (state, { discussion_id }) {
      const discussionPosition = getIndexes.getElementIndex(state.conversations, discussion_id)
      if (discussionPosition !== -1) {
        state.conversations[discussionPosition].unread = 0
      }
    },

    // Mark a conversation as readed
    MARK_CONVERSATION_AS_READ (state, { discussion_index, reader_id, reading_time }) {
      let conversation = state.conversations[discussion_index]
      let index = 0

      for (index; index < conversation.messages.length; index++) {
        if (conversation.messages[index].from_id === state.currentUser.id &&
          conversation.messages[index].count_readers < conversation.users.length) {
          conversation.messages[index].readers[reader_id] = { reader_id: reader_id, reading_time: reading_time }
          conversation.messages[index].count_readers += 1
        }
      }
      conversation.latestMessage = conversation.messages[conversation.messages.length - 1]
    },

    // Adding message to discussion
    ADD_MESSAGE_TO_DISCUSSION (
      state,
      {
        discussion_id,
        message
      }) {
      const discussionPosition = getIndexes.getElementIndex(state.conversations, discussion_id)
      // If there is a problem with message discusion
      if (!message || discussionPosition < 0) {
        return
      }
      const messagePosition = getIndexes.getElementIndex(state.conversations[discussionPosition].messages, message.id)
      // Message already exist
      if (messagePosition > -1) {
        return
      }

      const discussion = state.conversations[discussionPosition]
      if (state.currentUser.id !== message.from_id && state.currentConversation !== message.discussion_id) {
        discussion.unread++
        if (discussion.is_group) {
          getIndexes.myMessageNotifer('https://notificationsounds.com/soundfiles/c9892a989183de32e976c6f04e700201/file-sounds-1109-slow-spring-board-longer-tail.wav')
        } else {
          getIndexes.myMessageNotifer('https://notificationsounds.com/soundfiles/15de21c670ae7c3f6f3f1f37029303c9/file-sounds-1085-definite.wav')
        }
      }
      message.readers = {}
      message.count_readers = 0
      message.inserted_at = moment(message.inserted_at).add(-(new Date().getTimezoneOffset()) / 60, 'hours')

      if (message.from_id === state.currentUser.id) {
        message.readers[state.currentUser.id] = { user_id: message.inserted_at, read_at: message.inserted_at }
        message.count_readers += 1
      }

      discussion.count++
      discussion.latestMessage = Object.assign({}, message)

      discussion.messages.push(message)

      state.conversations.splice(discussionPosition, 1)
      state.conversations.splice(0, 0, discussion)
      /*  state.conversations.sort((convA, convB) => {
          return new Date(convA.latestMessage.inserted_at) - new Date(convB.latestMessage.inserted_at) ? 1 : -1
        }) */
    },
    // Adding typing user flag
    ADD_TYPING_USER (state, { discussion_id, user_id }) {
      const discussionPosition = getIndexes.getElementIndex(state.conversations, discussion_id)
      const userPosition = getIndexes.getElementIndex(state.OnlineUsers, user_id)
      if (discussionPosition !== -1 && userPosition !== -1) {
        state.conversations[discussionPosition].typing_user = state.OnlineUsers[userPosition].username + ' is typing...'
      }
    },
    // Adding typing user flag
    REMOVE_TYPING_USER (state, { discussion_id, user_id }) {
      const discussionPosition = getIndexes.getElementIndex(state.conversations, discussion_id)
      const userPosition = getIndexes.getElementIndex(state.OnlineUsers, user_id)
      if (discussionPosition !== -1 && userPosition !== -1) {
        state.conversations[discussionPosition].typing_user = null
      }
    },

    SORT_DISCUSSIONS (state) {
      state.conversations.sort((convA, convB) => {
        return new Date(convA.latestMessage.inserted_at) - new Date(convB.latestMessage.inserted_at) < 0 ? 1 : -1
      })
    }
  },
  actions: {
    // Auth actions
    /**
     * Authenticate user
     */
    [Action.AUTH_REQUEST]: ({ commit, dispatch }, creds) => {
      return new Promise((resolve, reject) => { // The Promise used for router redirect in login
        commit(Mutation.SHOW_LOADER)
        axios({ url: Urls_.LOGIN_URL, data: creds, method: 'POST' })
          .then(resp => {
            const user = resp.data.user
            // store the token in localstorage
            setItemsStorage(user)
            commit(Mutation.AUTH_SUCCESS, user)
            dispatch('loadingConversationsThreads')
            commit(Mutation.HIDE_LOADER)
            resolve(resp)
          })
          .catch(err => {
            commit(Mutation.AUTH_ERROR, err)
            commit(Mutation.HIDE_LOADER)
            // if the request fails, remove any possible user token if possible
            clearStorage()
            reject(err)
          })
      })
    },
    [Action.AUTH_LOGOUT]: ({ commit, dispatch }) => {
      return new Promise((resolve, reject) => {
        commit(Mutation.SHOW_LOADER)
        axios({ url: Urls_.SIGNOUT_URL, data: null, method: 'DELETE' }).then(resp => {
          clearStorage() // clear your user's token from localstorage
          commit(Mutation.CLEAR_AUTH)

          window.user_socket.disconnect()
          commit(Mutation.HIDE_LOADER)
          resolve()
        })
          .catch(err => {
            clearStorage() // clear your user's token from localstorage
            commit(Mutation.HIDE_LOADER)
            reject(err)
          })
      })
    },
    [Action.AUTH_SIGNUP]: ({ commit, dispatch }, user_info) => {
      return new Promise((resolve, reject) => {
        commit(Mutation.SHOW_LOADER)
        axios({ url: Urls_.REGISTRATION_URL, data: user_info, method: 'POST' })
          .then(resp => {
            console.log(resp)
            const user = resp.data.user
            // store the token in localstorage
            setItemsStorage(user)
            dispatch('loadingConversationsThreads')
            commit(Mutation.HIDE_LOADER)
            commit(Mutation.AUTH_SUCCESS, user.token)
            resolve(resp)
          })
          .catch(err => {
            commit(Mutation.AUTH_ERROR, err)
            commit(Mutation.HIDE_LOADER)
            // if the request fails, remove any possible user token if possible
            clearStorage()
            reject(err)
          })
      })
    },
    [Action.AUTH_PING_CURRENT_USER_URL]: ({ commit, dispatch }) => {
      return new Promise((resolve, reject) => {
        commit(Mutation.SHOW_LOADER)
        axios({ url: Urls_.PING_CURRENT_USER_URL, method: 'GET' })
          .then(resp => {
            const user = resp.data.user
            // store the token in localstorage
            setItemsStorage(user)
            commit(Mutation.AUTH_SUCCESS, user)
            dispatch('loadingConversationsThreads')
            commit(Mutation.HIDE_LOADER)
            resolve(resp)
          })
          .catch(err => {
            commit(Mutation.AUTH_ERROR, err)
            commit(Mutation.HIDE_LOADER)
            // if the request fails, remove any possible user token if possible
            clearStorage()
            reject(err)
          })
      })
    },

    loadingConversationsThreads: async function (context) {
      context.commit(Mutation.SHOW_LOADER)
      let presences = {}

      const socket = await new Socket('/socket', {
        params: {
          token: context.state.token
        }
      })

      socket.connect()
      // var channel = socket.channel("rooms:lobby", {})
      // const channel = socket.channel(`users:${localStorage.getItem('id_token')}`);
      const channel = socket.channel(`users:join`)
      channel.on('presence_diff', (response) => {
        presences = Presence.syncDiff(presences, response)
        if (this.getters.getCurrentUser) {
          syncPresentUsers(this, presences)
        }
      })

      channel.on('presence_state', (response) => {
        presences = Presence.syncState(presences, response)
        if (this.getters.getCurrentUser) {
          syncPresentUsers(this, presences)
          optionListener.menuListener()
        }
      })
      if (channel.state !== 'joined') {
        channel.join().receive('ok', (response) => {
          window.socket = socket
          // Getting my discussions
          window.channelDiscussion = {}
          response.discussions.forEach(async function (discussion) {
            await context.dispatch('addDiscussion', discussion)
            const channelDiscussion = await socket.channel(`conversation:${discussion.id}`)
            if (channelDiscussion.state !== 'joined') {
              channelDiscussion.join().receive('ok', async (response) => {
                // The user receive a new message || When the user send a message
                channelDiscussion.on('conversation:alert:new_messages', async response => {
                  let message = response.message
                  await context.commit('ADD_MESSAGE_TO_DISCUSSION',
                    { discussion_id: message.conversation_id, message: message })
                  // Marked as read when the message discussion is opened
                  if (context.state.currentConversation === message.conversation_id) {
                    // channelDiscussion.push("conversation:mark_read_messages")
                    context.dispatch('markConversationAsReaded', { discussion_id: context.state.currentConversation })
                  }
                })

                channelDiscussion.on('conversation:hey_someone_read_messages', async response => {
                  if (response.user_id !== context.getters.getCurrentUser.id) {
                    const discussionPosition = getIndexes.getElementIndex(context.state.conversations, response.discussion_id)
                    if (discussionPosition !== -1) {
                      response.discussion_index = discussionPosition
                      context.commit('MARK_CONVERSATION_AS_READ',
                        response
                      )
                    }
                  }
                })

                channelDiscussion.on('conversation:hey_someone_is_typing', async response => {
                  if (response.user_id !== context.getters.getCurrentUser.id) {
                    await context.commit(
                      'ADD_TYPING_USER',
                      { discussion_id: discussion.id, user_id: response.user_id })
                  }
                })

                channelDiscussion.on('conversation:hey_someone_remove_typing', response => {
                  if (response.user_id !== context.getters.getCurrentUser.id) {
                    context.commit('REMOVE_TYPING_USER',
                      { discussion_id: discussion.id, user_id: response.user_id })
                  }
                })
              })
              // console.log(channelDiscussion)
              window.channelDiscussion[discussion.id] = channelDiscussion
            }
          })

          context.commit('SORT_DISCUSSIONS')
        }).receive('error', (response) => {
        })
      } else {
        this.$router.push("{name: 'logout'}")
      }
      context.commit(Mutation.HIDE_LOADER)
    },

    loadOnlineUsers: async function (context, OnlineUsers) {
      await context.commit('SET_ONLINE_USERS', { OnlineUsers })
    },

    addDiscussion: async function (context, discussion) {
      context.commit('ADD_DISCUSSION', { discussion: discussion })
    },

    removeDiscussion: async function (context, id_discussion) {
      context.commit('REMOVE_DISCUSSION', {
        discussion: id_discussion
      })
    },

    editDiscussion: async function (context, id_discussion) {
      context.commit('EDIT_DISCUSSION', {
        discussion: id_discussion
      })
    },

    // CurrentConversation | Chat opened
    setOpenedConversation: async function (context, discussions_id) {
      await context.commit('SET_OPENED_DISCUSSION', { discussions_id })
      context.dispatch('markConversationAsReaded', { discussion_id: discussions_id })
    },

    loadAllContacts: async function (context) {
      return axios.get('/users')
    },

    addAllContacts: async function (context, { AllContacts }) {
      context.commit('addAllContacts', { AllContacts: AllContacts })
    },

    async markConversationAsReaded (context, { discussion_id }) {
      const discussionPosition = getIndexes.getElementIndex(context.state.conversations, discussion_id)
      if (discussionPosition !== -1) {
        const discussion = context.state.conversations[discussionPosition]
        // console.log(window.channelDiscussion[1]);

        if (discussion.unread > 0) {
          await window.channelDiscussion[discussion.id].push('conversation:mark_read_messages', { discussion_id: discussion.id })
          context.commit('REINIT_CONVERSATION_UNREAD', { discussion_id: discussion_id })
        }
      }
    }

  }
})

export default store
