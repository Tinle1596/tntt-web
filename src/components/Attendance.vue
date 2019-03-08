<template>
    <div id="attendance">
        <attendance-manager></attendance-manager>
    </div>
</template>

<script>
import AttendanceManager from './attendance/AttendanceManager'

export default {
    name: 'Attendance',
    components: {
        AttendanceManager
    }
}
</script>

<style scoped>

</style>