import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import VueRouter from 'vue-router'
import Routes from './routes.js'
import BootstrapVue from 'bootstrap-vue'


Vue.use(VueRouter);
Vue.use(BootstrapVue);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})

Vue.config.productionTip = false

new Vue({
  store,       
  render: h => h(App),
  router: router,
}).$mount('#app')
