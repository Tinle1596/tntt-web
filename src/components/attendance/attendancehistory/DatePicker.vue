<template>
  <div>
    <v-layout>
      <v-date-picker v-model="date" show-current></v-date-picker>
    </v-layout>
    <v-layout row wrap align-end justify-center>
      <v-flex xs5 pt-1 mr-1>
        <v-btn color="error" @click="toggleHistoryOverlay" block rounded>Close</v-btn>
      </v-flex>
      <v-flex xs5 pt-1 ml-1>
        <v-btn color="success" @click="submitDate(date)" block rounded>Submit</v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      date: new Date().toISOString().substr(0, 10)
    };
  },
  computed: {},
  methods: {
    ...mapActions(["updateCurrentDate", "toggleHistoryOverlay"]),

    submitDate(date) {  
      this.$store.dispatch("submitDate", date);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>