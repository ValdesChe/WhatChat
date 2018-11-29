import Vue from 'vue/dist/vue.js'
import VueRouter from 'vue-router'

import Asida from "../components/asida.vue"
import Home from "../components/home.vue"
import Conversation from "../components/conversation.vue"
Vue.use(VueRouter)

import auth from '../auth'


// Defining our guards
const requireAuth = (to, _from, next) => {
  if (!auth.user.authenticated) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
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
     name: 'home',
     component: Home,
     children: [
       { path: 'conversation:id', name: 'conversation', component: Conversation },
       { path: '*', redirect: { name: 'home' } }
     ]
   },
  {
    path: '/foo',
    name: 'foo',
    component: Asida
  },

  { path: '*', redirect: { name: 'home' } }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes // short for `routes: routes`
})

export default router
