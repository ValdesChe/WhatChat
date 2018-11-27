import Vue from 'vue/dist/vue.js'
import VueRouter from 'vue-router'

import Asida from "../../components/asida.vue"
import Home from "../../components/home.vue"
import Conversation from "../../components/conversation.vue"
Vue.use(VueRouter)
// 1. Define route components.
// These can be imported from other files
const Foo = { template: '<div> ValdoR Boooo</div>' }
const Bar = { template: '<div>bar 11111555 </div>' }

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.

const routes = [
  {
     path: '/',
     name: 'home',
     component: Home,
     children: [
       { path: 'conversation:id', name: 'conversation', component: Conversation },
       { path: '*', redirect: { name: 'default' } }
     ]
   },
  {
    path: '/foo',
    name: 'foo',
    component: Asida
  },

  { path: '*', name: 'default', redirect: { name: 'home' } }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  mode: 'hash',
  routes // short for `routes: routes`
})

export default router
