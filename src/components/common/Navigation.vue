<template>
  <div>
    <v-navigation-drawer clipped fixed v-model="drawer" app>      
      <v-list dense>
        <v-flex>
          <auth></auth>
        </v-flex>                        
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
import Auth from './Auth'

export default {
  components:{
        Auth
      },
  data() {
    return {      
      drawer: false,
      links: [
          {icon: 'home', text:'Home', route: '/'},
          {icon: 'how_to_reg', text:'Attendance Manager', route: '/attendance/manager'},
          {icon: 'assignment_ind', text: 'Attendance History', route: '/attendance/history'}          
      ]
    };
  }
};
</script>

<style scoped>

</style>