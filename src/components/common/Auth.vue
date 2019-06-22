<template>
  <div>
    <div v-if="isSignedIn" key="login">
      <b-button @click="doLogout()">Sign Out</b-button>
    </div>
    <div v-else key="logout">
      <b-button @click="doLogin()">Log In</b-button>
    </div>
  </div>
</template>

<script>
import firebase from "../../config/firebase.js";
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