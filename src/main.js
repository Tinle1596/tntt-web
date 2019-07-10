import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import router from './router'
import Vuetify from 'vuetify'

Vue.use(Vuetify, {
  iconfont: 'mdi' //  'md' || 'mdi' || 'fa' || 'fa4'
});

import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

new Vue({  
  store,
  router,       
  render: h => h(App),
}).$mount('#app')
