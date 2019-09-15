<template>
  <div>    
    <v-card flat min-height="250" min-width="300" max-height="640" max-width="480">      
      <v-card-title primary-title>
        Edit
      </v-card-title>
      <v-container>
        <v-card-text> Set permissions </v-card-text>
      <v-row>
        <v-col>
          <v-select :items="roles" v-model="currentRole"></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn color="error" @click="toggleUserOverlay">Close</v-btn>   
        </v-col>
        <v-col>
          <v-btn color="success" @click="addRoleByUid(user.uid, currentRole)">Save</v-btn>
        </v-col>        
      </v-row>
      </v-container>      
    </v-card>    
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    user: {}
  },
  data() {
    return {
      currentRole: "",
      roles:
      [
        'Admin',
        'Teacher',
        'Parent'        
        ]
    };
  },
  components: {},
  methods: {
    ...mapActions(["toggleUserOverlay", "addRoleByUid"])    
  }
};
</script>

<style lang="scss" scoped>

</style>