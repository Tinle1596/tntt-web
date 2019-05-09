<template>
  <div id="students">    
    <b-card-group v-for="student in filteredSearchStudents" :key="student.id">
        <b-card
          :header="student.firstName + ' ' + student.lastName"          
          header-text-variant="black" 
          bg-variant="info"
          style="max-width:25rem; max-height: 15rem"
          class="overflow-hidden">
          <b-col md="6">
            <b-card-img 
            src="https://i.imgur.com/y7oYbiP.jpg"             
            style="max-width:5rem; max-height: 5rem"
            class="rounded-0"
            >
            </b-card-img>
          </b-col>                      
          <b-col md="6">
            <b-card-text>
              test
            </b-card-text>
          </b-col>            
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
</style>