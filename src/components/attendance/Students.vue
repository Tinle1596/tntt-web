<template>
    <div id="students">
        test from student
        <div class= 'filter'>            
            <button v-on:click="changeCurrentList('All')">All</button>
            <button v-on:click="changeCurrentList('In')">Check-In</button>
            <button v-on:click="changeCurrentList('Out')">Check-Out</button>
        </div>        
        <ul>
            <div v-for="student in filteredStudents" :key="student.id">
                <div class="student-card">
                    <div class="student-info">
                        <h2> {{student.firstName}} {{ student.lastName }}</h2>
                    </div>
                    <div class="student-image">
                        <img src="https://pbs.twimg.com/profile_images/737087391882567680/oNV5mIrx.jpg" alt="">
                    </div>                    
                </div>
            </div>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
    export default {
        name: 'Students',
        props:{
        },
        data() {
            return {
                
            }
        },
        computed:{
            ...mapGetters({
                students: 'allStudents',
                filteredStudents: 'filteredStudents'
            }),        
        },     
        methods: {
            changeCurrentList: function(payload){
                this.$store.dispatch('changeCurrentList', payload)
            }
        }   
    }
</script>

<style scoped>
img{
    max-width: 100%;
    min-height: 25vh
}
.student-image{
    width: 25vh;
    min-height: 20vh;
    max-height: auto;
    margin: 5px;
    padding: 10px
}
.student-card{
    background: #45A29E;

}

label{
    display: block;
    line-height: 1.5em;
}
</style>