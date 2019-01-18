import Vue from 'vue/dist/vue.js'
import VueRouter from 'vue-router'

import Messagerie from "../components/Messagerie.vue"
import Login from "../components/Login.vue"
import Conversation from "../components/conversation.vue"
import Welcome from "../components/utils/welcome.vue"
Vue.use(VueRouter)

import auth from '../auth'


// Defining our guards
const requireAuth = (to, _from, next) => {
  // console.log(auth.user.authenticated);
  if (!auth.user.authenticated) {
    next({
      name: 'login',
      // query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}

const afterAuth = (_to, from, next) => {
  if (auth.user.authenticated) {
    next(from.path)
  } else {
    next()
  }
}


const routes = [
  {
    path: '/',
    component: Messagerie,
    beforeEnter: requireAuth,
    children: [
      { path: '$\:id\$', name: 'conversation', component: Conversation },
      { path: '/', name: 'home', component: Welcome  },
      { path: '*', redirect: { name: 'home' } }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    beforeEnter:afterAuth
  },
  {
    path: '/logout',
    name: 'logout',
    component: Messagerie
  },

  {
    path: '/signup',
    name: 'signup',
    beforeEnter:afterAuth,
    component: Messagerie
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
