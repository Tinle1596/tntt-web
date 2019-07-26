import Vue from 'vue'
import Vuex from 'vuex'
import ui from './modules/ui'
import attendancemanager from './modules/attendancemanager'
import atteendancehistory from './modules/attendancehistory'
import auth from './modules/auth'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    ui,
    attendancemanager,
    atteendancehistory,
    auth    
  },
  strict: false
})