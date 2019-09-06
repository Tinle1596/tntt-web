<template>
  <div>
    <v-card flat>
      <v-subheader>update role</v-subheader>      
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
    return {};
  },
  components: {},
  methods: {
    ...mapActions(["toggleUserOverlay"])
  }
};
</script>

<style lang="scss" scoped>
.v-card {
  border-radius: 50px;
}
</style>