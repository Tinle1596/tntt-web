<template>
  <div>
    <v-card flat>
      <v-list>
        <v-subheader>Users</v-subheader>
        <v-list-item v-for="user in users" :key="user.uid">
          <v-list-item-avatar>
            <v-img :src="user.photoURL"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ user.displayName }}</v-list-item-title>
            <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn icon>
              <v-icon>edit</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-card>
    <v-footer absolute>
      <v-flex>
        <v-text-field flat floating label="search" prepend-inner-icon="search" solo></v-text-field>
      </v-flex>
    </v-footer>
  </div>
</template>

<script>
export default {
  props: {
    users: Array
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.v-text-field {
  border-radius: 100px;
}
</style>