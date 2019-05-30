import Home from './components/Home.vue'
import AttendanceManage from './components/AttendanceManage.vue'
import AttendanceView from './components/AttendanceView.vue'


export default [
    {path: '/', component: Home},
    {path: '/attendancemanager', component: AttendanceManage},
    {path: '/attendanceviewer', component: AttendanceView}

]