<template>
  <div>
      <attendance-history-manager></attendance-history-manager>
  </div>
</template>

<script>
import AttendanceHistoryManager from './AttendanceHistoryManager'

export default {
  name: "AttendanceHistory",
  components:{
      AttendanceHistoryManager
  },
  data() {
    return {};
  },
  
};
</script>

<style scoped>
</style>