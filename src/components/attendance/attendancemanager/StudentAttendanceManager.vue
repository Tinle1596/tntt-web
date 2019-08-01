<template>
  <div>
    <v-layout row wrap>
      <v-flex>
        <v-tabs v-model="tabs" centered grow>
          <v-tab href="#tab-allstudents">
            <v-icon>group</v-icon>
          </v-tab>
          <v-tab href="#tab-activestudents">
            <v-icon>person</v-icon>
          </v-tab>
          <v-tab href="#tab-inactivestudents">
            <v-icon>person_outline</v-icon>
          </v-tab>
        </v-tabs>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex ma-2>
        <v-tabs-items v-model="tabs">
          <v-tab-item :value="'tab-allstudents'">
            <student-card :students="allStudents"></student-card>
          </v-tab-item>
          <v-tab-item :value="'tab-activestudents'">
            <student-card :students="activeStudents"></student-card>
          </v-tab-item>
          <v-tab-item :value="'tab-inactivestudents'">
            <student-card :students="inactiveStudents"></student-card>
          </v-tab-item>
        </v-tabs-items>
      </v-flex>
    </v-layout>
    <v-footer absolute>
      <v-flex>
        <search></search>
      </v-flex>
    </v-footer>
  </div>
</template>

<script>
import Search from "./Search";
import StudentCard from "./StudentCard";
import StudentFilter from "./StudentFilter";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    Search,
    StudentCard,
    StudentFilter
  },
  data() {
    return {
      tabs: null
    };
  },
  created() {
    this.$store.dispatch("initRealtimeListeners");
    this.$store.dispatch("retrieveStudents");
  },
  computed: {
    ...mapGetters({
      allStudents: "filteredSearchStudents"
    }),
    activeStudents() {
      return this.$store.getters.isActiveStudents(true);
    },
    inactiveStudents() {
      return this.$store.getters.isActiveStudents(false);
    }
  }
};
</script>

<style scoped>
</style>