<template>
  <div>
    <v-container xs>
      <v-layout row wrap align-center v-if="isSignedIn" key="login">
        <v-flex shrink>
          <v-flex>
            <v-avatar size="50">
              <img v-if="user.photoURL" :src="user.photoURL">
              <v-icon size="50" v-else>face_outline</v-icon>
            </v-avatar>            
          </v-flex>          
        </v-flex>
        <v-flex grow pl-3>
          <h2> {{ user.displayName}} </h2>
        </v-flex>
        <v-flex shrink xs>
          <v-btn small round color="red darken-4" @click="doLogout()">Sign Out</v-btn>
        </v-flex>
      </v-layout>
      <v-layout row wrap v-else key="logout">
        <v-flex>
            <v-btn block round @click="doLogin()">Sign In</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { login, logout, onAuth } from "../../config/firebase.js";
import { mapGetters } from "vuex";

export default {
  name: "Authentication",
  created: function() {
    onAuth();
  },
  computed: {
    ...mapGetters(["user", "isSignedIn"])
  },
  methods: {
    doLogin() {
      login();
    },
    doLogout() {
      logout();
    }
  }
};
</script>

<style lang="scss" scoped>
</style>