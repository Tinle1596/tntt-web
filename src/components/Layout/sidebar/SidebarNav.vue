<template>
  <div>
    <auth></auth>
    <b-container>
      <b-col @click="toggleSidebar"><router-link to="/"> Home </router-link></b-col>    
      <b-col @click="toggleSidebar"><router-link to="/attendancemanager"> Attendance Manager </router-link></b-col>
      <b-col @click="toggleSidebar"><router-link to="/attendanceviewer"> Attendance Viewer </router-link></b-col>
    </b-container>
  </div>
</template>

<script>
import auth from '../../common/Auth'
export default {
  name: "Navigation",
  components: {
    auth
  },
  methods: {
    toggleSidebar () {
      this.$store.dispatch('toggleSidebar')
    }
  }
};
</script>

<style scoped>

</style>