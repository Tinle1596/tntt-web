<template>
    <div id="students">
        test from student
        <div class= 'filter'>
            <label><input type="radio" name="filter" v-model="selectedAttendance" value="All">All</label>
            <label><input type="radio" name="filter" v-model="selectedAttendance" value="In">In</label>
            <label><input type="radio" name="filter" v-model="selectedAttendance" value="Out">Out</label>
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
                
                selectedAttendance: ""
            }
        },
        computed:{
            ...mapGetters({
                students: 'allStudents'
            }),
             filteredStudents: function() {
            var vm = this;
            var attendance = vm.selectedAttendance;

            if(attendance === "All"){
                return vm.students;
            } else {
                return vm.students.filter(function(student) {
                    return student.attendance === vm.selectedAttendance;
                })
            }
        }
        },        
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