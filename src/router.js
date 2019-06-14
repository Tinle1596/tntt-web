import Vue from 'vue'
import Home from './components/Home.vue'
import AttendanceManage from './components/AttendanceManage.vue'
import AttendanceView from './components/AttendanceView.vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router ({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {path: '/', component: Home },
        {path: '/attendancemanager', component: AttendanceManage},
        {path: '/attendanceviewer', component: AttendanceView}
    ]
})