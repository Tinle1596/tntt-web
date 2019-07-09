import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import Vuetify from 'vuetify'

Vue.use(BootstrapVue);
Vue.use(Vuetify);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

new Vue({
  store,
  router,       
  render: h => h(App),
}).$mount('#app')
