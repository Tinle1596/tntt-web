<template>
    <div id="attendance-manager">
        <student-dashboard></student-dashboard>
        <students></students>
    </div>
</template>

<script>
import Students from './Students'
import StudentDashboard from './StudentDashBoard'
export default {
    name: 'AttendanceManager',
    components: {
        Students,
        StudentDashboard
    },
    data() {
        return {
            
        }
    },
    computed: {
       
    },
}
</script>

<style scoped>


</style>