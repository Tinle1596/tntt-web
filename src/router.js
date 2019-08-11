import Vue from 'vue'
import Home from './components/views/Home.vue'
import AttendanceManagerView from './components/views/AttendanceManagerView.vue'
import AttendanceHistoryView from './components/views/AttendanceHistoryView.vue'
import ManageUsersView from './components/views/ManageUsersView.vue'
import ManageStudentsView from './components/views/ManageStudentsView.vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router ({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {path: '/', component: Home },
        {path: '/attendance/manager', component: AttendanceManagerView},
        {path: '/attendance/history', component: AttendanceHistoryView},
        {path: '/manage/users', component: ManageUsersView},
        {path: '/manage/students', component: ManageStudentsView},
    ]
})