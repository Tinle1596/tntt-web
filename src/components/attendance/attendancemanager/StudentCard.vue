<template>
  <div id="students">
    <v-container fluid>      
      <transition-group name="slide" tag="span">
      <v-layout row wrap v-for="student in students" :key="student.id">
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
export default {
  name: "Students",
  props: { students: Array },
  components: {
  },
  data() {
    return {};
  },
  created() {
    
  },
  computed: {    
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
    transition: transform 0.5s ease-in;
}

.slide-leave-to {
    transform: translateX(500px);
}

.slide-move {
    transition: transform 1s;
}
</style>