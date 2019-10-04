import Vue from 'vue'
import Vuex from 'vuex'
import attendancemanager from './modules/attendancemanager'
import attendancehistory from './modules/attendancehistory'
import studentcrud from './modules/studentcrud'
import auth from './modules/auth'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {    
    attendancemanager,
    attendancehistory,
    studentcrud,
    auth    
  },
  strict: false
})