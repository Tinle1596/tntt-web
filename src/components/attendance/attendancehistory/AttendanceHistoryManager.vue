<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 mx-1>
        <v-btn rounded block @click="toggleOverlay" x-large>
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
    <v-layout column wrap>{{timestamps}}</v-layout>
    <v-overlay :value="overlayStatus">
      <v-flex>
        <date-picker></date-picker>        
      </v-flex>
    </v-overlay>
  </v-container>
</template>

<script>
import { mapGetters, mapActions, mapMutations} from 'vuex';
import AttendanceSparkline from './AttendanceSparkline';
import DatePicker from '../../common/DatePicker';

export default {
  name: "AttendanceHistoryManager",
  props: {},
  components: {
    AttendanceSparkline,
    DatePicker
  },
  data() {
    return {

    };
  },
  // created() {
  //   this.$store.dispatch("retrieveTimestamps");
  // },
  methods: {
    ...mapActions(['toggleOverlay'])    
  },
  computed: {
    ...mapGetters(['timestamps', 'currentDate', 'overlayStatus'])
  },
  created(){
    this.$store.dispatch('getTimestampsByDate', new Date().toISOString().substr(0, 10))
  }
};
</script>

<style lang="scss" scoped>
</style>