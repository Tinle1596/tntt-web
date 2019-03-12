<template>
    <div id="student-dashboard">
        <div class="dashboard-container">
            <button v-on:click="changeCurrentList('All')">All</button>
            <button v-on:click="changeCurrentList('In')">Check-In</button>
            <button v-on:click="changeCurrentList('Out')">Check-Out</button>
            <div class="search">
                <input type="text" placeholder="search student">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'StudentDashBoard',
        methods:{
            changeCurrentList: function(payload){
                this.$store.dispatch('filterStudentAttendance', payload)
            }
        }
    }
</script>

<style scoped>
.search{
    background-color: white;
    width: 300px;

}

</style>