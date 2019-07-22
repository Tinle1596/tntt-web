<template>
    <div id="attendance-manager">
        <student-attendance-manager></student-attendance-manager>
    </div>
</template>

<script>
import StudentAttendanceManager from './StudentAttendanceManager'

export default {
    name: 'AttendanceManager',
    components: {
        StudentAttendanceManager
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