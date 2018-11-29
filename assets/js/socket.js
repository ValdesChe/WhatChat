// NOTE: The contents of this file will only be executed if
// you uncomment its entry in "web/static/js/app.js".

// To use Phoenix channels, the first step is to import Socket
// and connect at the socket path in "lib/my_app/endpoint.ex":
import { Socket } from "phoenix";

import Vue from 'vue/dist/vue.js';
//axios
import Axios from 'axios';
import VueAxios from 'vue-axios';


import MyApp from "../components/my-app.vue";

// ElementUI for design
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en';

Vue.use(ElementUI, { locale });

import { Button } from 'element-ui';

Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };
Vue.use(Button);


// import Asida from "./../components/asida.vue"
import router from "./router.js"
import store from "./store.js"



let socket = new Socket("/socket", { params: { token: window.userToken } })
socket.connect()

Vue.config.productionTip = false

Axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'X-Requested-With,content-type,authorization';
Axios.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8';
Axios.defaults.headers.common['withCredentials'] = 'X-Requested-With,content-type,authorization';
Axios.defaults.headers.common['Access-Control-Allow-Credentials'] = true;

Vue.use(VueAxios, Axios);
// Create the main component
// Vue.component('my-app', MyApp)


// And create the top-level view model:
new Vue({
  el: '#app',
  router,
  store,
  template: '<MyApp/>',
  components: { MyApp }
});
export default socket
