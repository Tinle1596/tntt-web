<template>  
    <v-app id="inspire" dark>
      <navigation></navigation>
      <v-content>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-content>
    </v-app>
</template>

<script>
import Navigation from "./components/common/Navigation";

export default {
  name: "app",
  components: {
    Navigation
  }
};
</script>

<style>

</style>
