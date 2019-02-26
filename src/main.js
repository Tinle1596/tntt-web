import Vue from 'vue'
import App from './App.vue'
import store from './store/index';
import VueRouter from 'vue-router'
import Routes from './routes.js'

Vue.use(VueRouter);

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
