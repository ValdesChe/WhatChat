import Vue from 'vue/dist/vue.js'
import VueRouter from 'vue-router'

import store from './store'
import { Action } from '../auth/index'

const Messagerie = () => import(/* webpackChunkName: "messagerie" */ '../components/Messagerie.vue')
const Login = () => import(/* webpackChunkName: "login" */ '../components/auth/Login.vue')
const Signup = () => import(/* webpackChunkName: "signup" */ '../components/auth/Signup.vue')
const Logout = () => import(/* webpackChunkName: "logout" */ '../components/auth/Logout.vue')
const Conversation = () => import(/* webpackChunkName: "conversation" */ '../components/Conversation.vue')
const Welcome = () => import(/* webpackChunkName: "welcome" */ '../components/utils/Welcome.vue')
Vue.use(VueRouter)

// Defining our guards
const requireAuth = (to, _from, next) => {
  if (!store.getters.isAuthenticated) {
    next({
      name: 'logout'
    })
    // next(from.path)
  } else {
    store.dispatch(Action.AUTH_PING_CURRENT_USER_URL).then(
      (resp) => {
        next()
      }
    ).catch((_err) => {
      next({
        name: 'logout'
      })
    })
  }
}

const afterAuth = (_to, from, next) => {
  if (store.getters.isAuthenticated) {
    next(from.path)
  } else {
    next()
  }
}

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
    beforeEnter: afterAuth
  },
  {
    path: '/logout',
    name: 'logout',
    component: Logout
    // beforeEnter: afterAuth
  },

  {
    path: '/signup',
    name: 'signup',
    beforeEnter: afterAuth,
    component: Signup
  },
  {
    path: '/',
    component: Messagerie,
    beforeEnter: requireAuth,
    children: [
      // eslint-disable-next-line no-useless-escape
      { path: '$\:id\$', name: 'conversation', component: Conversation },
      { path: '/', name: 'home', component: Welcome },
      { path: '*', redirect: { name: 'home' } }
    ]
  },

  { path: '*', redirect: { name: 'home' } }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes // short for `routes: routes`
})

export default router
