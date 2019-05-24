<template>
  <div id="students">    
    <b-card-group v-for="student in filteredSearchStudents" :key="student.id">
        <b-card
          :header="student.firstName + ' ' + student.lastName"          
          header-text-variant="black" 
          bg-variant="info"
          style="max-width:25rem; max-height: 15rem"
          class="overflow-hidden">
          <b-container fluid>
            <b-row>
              <b-col cols="auto" sm=true>
                <b-img src="https://i.imgur.com/y7oYbiP.jpg" class="student-profile-img">                                       
                </b-img>          
              </b-col>
              <b-col cols="3">
                <b-card-text>      
                  
                </b-card-text>
              </b-col>
              <b-col cols="auto" align-self="end">
                <div v-if="student.isActive === true">
                  <b-button variant="success" v-on:click="toggleAttendance(student)">
                    Checked-in
                  </b-button>
                </div>
                <div v-else>
                  <b-button variant="danger" v-on:click="toggleAttendance(student)">
                    Checked-Out
                  </b-button>
                </div>
              </b-col>
            </b-row>
          </b-container>          
        </b-card>
    </b-card-group>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
//import attendanceButton from './common/AttendanceButton'

export default {
  name: "Students",
  props: {},
  components: {
    //attendanceButton
  },
  data() {
    return {};
  },
  created(){
    this.$store.dispatch('initRealtimeListeners')
    this.$store.dispatch('retrieveStudents')
  },
  computed: {
    ...mapGetters([
      'filteredSearchStudents'
      ]),
    ...mapActions([
      //'updateAttendance'
    ]),
  },
  methods: {
    toggleAttendance(student) {            
      this.$store.dispatch('toggleAttendance', student)
    }
  }
};
</script>

<style scoped>
label {
  display: block;
  line-height: 1.5em;
}

.student-profile-img{
  width: 100px;
  height: 100px;
  border-radius: 50%;

  object-fit: cover;
  object-position: left;
}
</style>