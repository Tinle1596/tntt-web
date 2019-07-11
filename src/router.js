import Vue from 'vue'
import Home from './components/views/Home.vue'
import AttendanceManagerView from './components/views/AttendanceManagerView.vue'
import AttendanceHistoryView from './components/views/AttendanceHistoryView.vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router ({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {path: '/', component: Home },
        {path: '/attendance/manager', component: AttendanceManagerView},
        {path: '/attendance/history', component: AttendanceHistoryView}
    ]
})