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
              <v-btn icon @click="toggleUserOverlay">
                <v-icon>edit</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <custom-claim-chips :claims="Object.is(user.customClaims, undefined || null) ? ['no roles'] : Object.keys(user.customClaims)"></custom-claim-chips>
        </v-expansion-panel-content>
        <v-overlay :value="userOverlayStatus">
          <v-flex>
            <user-modal :user="user"></user-modal>
          </v-flex>
        </v-overlay>
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
import { mapGetters, mapActions } from "vuex";
import UserModal from "./UserModal";
import CustomClaimChips from "./UserCustomClaimChips";

//
export default {
  props: {
    users: Array
  },
  components: {
    UserModal,
    CustomClaimChips
  },
  computed: {
    ...mapGetters(["userOverlayStatus"]),
  },
  methods: {
    ...mapActions(["toggleUserOverlay"])   
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