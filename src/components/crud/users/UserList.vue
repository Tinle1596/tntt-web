<template>
  <div>
    <v-subheader>Users</v-subheader>
    <v-expansion-panels>
      <v-expansion-panel v-for="user in users" :key="user.uid">
        <v-expansion-panel-header hide-actions>
          <v-list-item dense>
            <v-list-item-avatar>
              <v-img :src="user.photoURL"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{ user.displayName }}</v-list-item-title>
              <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <custom-claim-chips :claims="nullCheckCustomClaims(user.customClaims)"></custom-claim-chips>
            </v-list-item-action>
          </v-list-item>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-container>
            <v-row>
              <v-col cols="9">
                <v-select
                  :items="roles"
                  item-text="text"
                  item-value="value"               
                  v-model="currentRole"
                  label="select role"
                ></v-select>
              </v-col>
              <v-col cols="3">
                <v-btn color="success" @click="addRoleByUid(user.uid, currentRole)">Save</v-btn>
              </v-col>
            </v-row>
          </v-container>          
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-footer absolute>
      <v-flex>
        <v-text-field flat floating prepend-inner-icon="search" solo></v-text-field>
      </v-flex>
    </v-footer>
  </div>
</template>

<script>
import { mapGetters, mapActions} from "vuex";
import EditUser from "./EditUser";
import CustomClaimChips from "./UserCustomClaimChips";

export default {
  props: {
    users: Array,
  },
  data() {
    return {
      roles: ["Admin", "Teacher", "Parent"],
      currentRole: null
    }
  },
  components: {
    EditUser,
    CustomClaimChips
  },
  computed: {
    ...mapGetters(["userOverlayStatus"]),
  },
  methods: {            
    addRoleByUid(uid, role){
      this.$store.dispatch('addRoleByUid', [uid, role])
    },    
    nullCheckCustomClaims(customClaims){
      return Object.is(customClaims, undefined || null) ? ['no roles'] : Object.keys(customClaims)
    }
  }
};
</script>

<style lang="scss" scoped>
.v-text-field {
  border-radius: 100px;
}
.v-expansion-panels {
  border-radius: 20px;
}
</style>