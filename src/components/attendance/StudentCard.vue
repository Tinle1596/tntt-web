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
                  {{ student.group }}
                </b-card-text>
              </b-col>
              <b-col cols="auto" align-self="end">
                <div v-if="student.attendance === true">
                  <b-button variant="danger">
                    Check-Out
                  </b-button>
                </div>
                <div v-else>
                  <b-button variant="success">
                    Check-In
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
import { mapGetters } from "vuex";
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
  computed: {
    ...mapGetters(["filteredSearchStudents"])
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