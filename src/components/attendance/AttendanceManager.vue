<template>
    <div id="attendance-manager">
        <student-dashboard></student-dashboard>
        <student-card></student-card>
    </div>
</template>

<script>
import StudentCard from './StudentCard'
import StudentDashboard from './StudentDashBoard'
export default {
    name: 'AttendanceManager',
    components: {
        StudentCard,
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