<template>
    <div id="attendance-manager">
        <student-search></student-search>
        <student-card></student-card>
        <student-filter></student-filter>
    </div>
</template>

<script>
import StudentSearch from './StudentSearch.vue'
import StudentCard from './StudentCard.vue'
import StudentFilter from './StudentFilter'

export default {
    name: 'AttendanceManager',
    components: {
        StudentSearch,
        StudentCard,
        StudentFilter
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