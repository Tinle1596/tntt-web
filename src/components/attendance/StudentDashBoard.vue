<template>
    <div id="student-dashboard">
        <div class="dashboard-container">
            <button v-on:click="changeCurrentList(null)">All</button>
            <button v-on:click="changeCurrentList(true)">Check-In</button>
            <button v-on:click="changeCurrentList(false)">Check-Out</button>
            <div class="search">
                <input type="search" v-model="searchWord"  required/>
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
        },
        computed: {
            searchWord:{
                get(){
                    return this.$store.state.searchWord
                },
                set(value){
                    this.$store.dispatch('updateSearchWord', value.toLowerCase())
                }
            }
        },
    }
</script>

<style scoped>
.search{
    background-color: white;
    width: 300px;

}

</style>