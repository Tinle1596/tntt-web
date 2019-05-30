<template>
    <div id="attendance-manager">
        <student-dashboard></student-dashboard>
        <student-card></student-card>
    </div>
</template>

<script>
import StudentCard from './StudentCard.vue'
import StudentDashboard from './StudentDashBoard.vue'
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