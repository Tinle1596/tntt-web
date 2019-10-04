import Vue from 'vue'
import Home from './components/views/Home.vue'
import AttendanceManagerView from './components/views/AttendanceManagerView.vue'
import AttendanceHistoryView from './components/views/AttendanceHistoryView.vue'
import ManageUsersView from './components/views/ManageUsersView.vue'
import ManageStudentsView from './components/views/ManageStudentsView.vue'
import Router from 'vue-router'
import store from './store/index.js'

Vue.use(Router)

const router = new Router ({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/', 
            component: Home
        },
        {
            path: '/attendance/manager', 
            component: AttendanceManagerView,
            meta: {requiresAuth: true, teacherAuth: true}
        },
        {
            path: '/attendance/history', 
            component: AttendanceHistoryView,
            meta: {requiresAuth: true, teacherAuth: true}
        },
        {
            path: '/manage/users', 
            component: ManageUsersView,
            meta: {requiresAuth: true, adminAuth: true}
        },
        {
            path: '/manage/students', 
            component: ManageStudentsView,
            meta: {requiresAuth: true, adminAuth: true}
        },
    ]
})

router.beforeEach((to, from, next) => {    
    if(to.meta.requiresAuth) {  
        const user = store.getters.user
        if(user === null){
            next('/');
        }        
        else if(to.meta.adminAuth) {
            if(!user.claims.admin){
                next('/');
            }else{
                next();
            }
        }
        else if(to.meta.teacherAuth) {
            if(user.claims.teacher || user.claims.admin){
                next()
            }else{
                next('/')
            }
        }
    }else{
        next()
    }
})

export default router;