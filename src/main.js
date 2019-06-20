import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import firebase from './config/firebase'
firebase.init();

Vue.use(BootstrapVue);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

new Vue({
  store,
  router,       
  render: h => h(App),
}).$mount('#app')
