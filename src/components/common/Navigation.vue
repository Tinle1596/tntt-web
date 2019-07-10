<template>
  <div>
    <v-navigation-drawer clipped fixed v-model="drawer" app>
      <v-list dense>
        <v-list-tile v-for="link in links" :key="link.icon" :to="link.route">
            <v-list-tile-action>
                <v-icon class="white--text">{{ link.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
                <v-list-tile-title class="white--text">{{ link.text }}</v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer">
        <v-icon>menu</v-icon>
      </v-toolbar-side-icon>
      <v-toolbar-title>Doan Emmanuel</v-toolbar-title>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
          {icon: 'home', text:'Home', route: '/'},
          {icon: 'assignment_ind', text:'Attendance Manager', route: '/attendancemanager'},          
      ]
    };
  }
};
</script>

<style scoped>

</style>