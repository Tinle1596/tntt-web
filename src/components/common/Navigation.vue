<template>
  <div>
    <v-navigation-drawer clipped fixed v-model="drawer" app>
      <v-list>
        <v-flex pa-1>
          <auth></auth>
        </v-flex>
        <v-list shaped>
          <v-list-item-group v-model="link">
            <v-list-item v-for="link in links" :key="link.icon" :to="link.route">
              <v-list-item-avatar>
                <v-icon v-text="link.icon"></v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-text="link.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app fixed clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer">
        <v-icon>menu</v-icon>
      </v-app-bar-nav-icon>
      <v-toolbar-title>Doan Emmanuel</v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
import Auth from "./Auth";

export default {
  components: {
    Auth
  },
  data() {
    return {
      drawer: false,
      link: 1,
      links: [
        {
          icon: "home",
          text: "Home",
          route: "/"
        },
        {
          icon: "how_to_reg",
          text: "Attendance Manager",
          route: "/attendance/manager"
        },
        {
          icon: "assignment_ind",
          text: "Attendance History",
          route: "/attendance/history"
        }
      ]
    };
  }
};
</script>

<style <style lang="scss">
.v-navigation-drawer {
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}
</style>
