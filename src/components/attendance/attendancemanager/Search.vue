<template>
  <div>
    <v-text-field
      flat
      floating
      label="search"
      prepend-inner-icon="search"
      solo
      v-model="searchWord"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  computed: {
    searchWord: {
      get() {
        return this.$store.state.searchWord;
      },
      set(value) {
        this.$store.dispatch("updateSearchWord", value.toLowerCase());
      }
    }
  }
};
</script>

<style scoped>
/* TODO: Getting circle v-text-field*/
.v-text-field
{
    border-radius: 100px;
}
</style>