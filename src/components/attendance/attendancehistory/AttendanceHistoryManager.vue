<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 mx-1>
        <v-btn rounded block @click="toggleHistoryOverlay" x-large>
          <v-icon>mdi-calendar-search</v-icon>
          {{ currentDate }}
        </v-btn>
      </v-flex>
    </v-layout>
    <v-layout column wrap>
      <v-flex xs12 ma-2>
        <attendance-sparkline></attendance-sparkline>
      </v-flex>
    </v-layout>
    <v-layout column wrap>
      <v-flex>
        <attendance-table :timestamps="timestamps">
        </attendance-table>
      </v-flex>
    </v-layout>
    <v-overlay :value="historyOverlayStatus">
      <v-flex>
        <date-picker></date-picker>        
      </v-flex>
    </v-overlay>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import AttendanceSparkline from './AttendanceSparkline';
import DatePicker from '../../common/DatePicker';
import AttendanceTable from './AttendanceTable';

export default {
  name: "AttendanceHistoryManager",
  props: {},
  components: {
    AttendanceSparkline,
    DatePicker,
    AttendanceTable
  },
  data() {
    return {

    };
  }, 
  methods: {
    ...mapActions(['toggleHistoryOverlay'])    
  },
  computed: {
    ...mapGetters(['timestamps', 'currentDate', 'historyOverlayStatus'])
  },
  created(){
    this.$store.dispatch('getTimestampsByDate', new Date().toISOString().substr(0, 10))
  }
};
</script>

<style lang="scss" scoped>
</style>