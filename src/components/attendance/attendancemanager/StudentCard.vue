<template>
  <div id="students">
    <!-- TODO: Refactor List rendering for students. Maybe user cards instead? -->
    <v-list three-line>
      <v-list-tile v-for="student in filteredSearchStudents" :key="student.id" avatar>
        <v-container fluid>
          <v-layout align-start justify-start row>
            <v-flex shrink pt-2 pr-2>
              <v-list-tile-avatar size="65">
                <img src="https://i.imgur.com/y7oYbiP.jpg">
              </v-list-tile-avatar>
            </v-flex>
            <v-flex grow pa-1>
              <v-list-tile-content>
                <v-list-tile-title v-html="student.firstName + ' ' + student.lastName"></v-list-tile-title>
                <v-list-tile-sub-title v-html="student.group"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-flex>
            <v-flex shrink>
              <v-switch :input-value="student.isActive" color="success" @change="toggleAttendance(student)"></v-switch>              
            </v-flex>
          </v-layout>
        </v-container>
      </v-list-tile>
    </v-list>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
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
  created() {
    this.$store.dispatch("initRealtimeListeners");
    this.$store.dispatch("retrieveStudents");
  },
  computed: {
    ...mapGetters(["filteredSearchStudents"]),
    ...mapActions([
      //'updateAttendance'
    ])
  },
  methods: {
    toggleAttendance(student) {
      this.$store.dispatch("toggleAttendance", student);
    }
  }
};
</script>

<style scoped>
</style>