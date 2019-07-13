<template>
  <div id="students">
    <v-container fluid>
      <transition-group name="slide" tag="span">
      <v-layout row wrap v-for="student in filteredSearchStudents" :key="student.id">
        <v-flex pa-1>
          <v-card flat max-height="100px">
            <v-layout row wrap>
              <v-flex shrink>
                <v-avatar>
                  <img src="https://i.imgur.com/y7oYbiP.jpg" />
                </v-avatar>
              </v-flex>
              <v-flex grow pl-2>
                <h3> {{ student.firstName + ' ' + student.lastName }} </h3>
                <h5> {{ student.group }} </h5>
              </v-flex>
              <v-flex shrink clipped-right>
                <v-switch 
                  height="5px" 
                  :input-value="student.isActive" 
                  color="success" 
                  @change="toggleAttendance(student)"
                  ></v-switch>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
      </transition-group>
    </v-container>    
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
.v-card {
  border-radius: 100px;
}

.slide-enter {
    transform: translateY(500px);
}

.slide-enter-active {
    transition: transform 0.7s ease-out;
}

.slide-enter-to {
    transform: translateY(0px);
}

.slide-leave {
    transform: translateX(0px);
}

.slide-leave-active {
    transition: transform 0.9s ease-in;
}

.slide-leave-to {
    transform: translateX(500px);
}

.slide-move {
    transition: transform 2s;
}
</style>