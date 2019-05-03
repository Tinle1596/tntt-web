<template>
    <div id="students">                
        <div v-for="student in filteredSearchStudents" :key="student.id">
            <b-card bg-variant="dark" text-variant="light" style="max-width: 90%; max-height: 10%;">
                <b-col>
                    
                </b-col>
            </b-card>          
        </div>        
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import attendanceButton from './common/AttendanceButton'

    export default {
        name: 'Students',
        props:{
        },
        components:{
            attendanceButton
        },
        data() {
            return {
                
            }
        },
        computed:{
            ...mapGetters([
                'filteredSearchStudents'
            ]),        
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
    width: 25pc;
}

.attendance-button{
    background: blue;
    float: right;
    border: 20px white;
    padding: 5px;
    height: 20px;
    width: 150px;
}

label{
    display: block;
    line-height: 1.5em;
}


</style>