<template>
  <div>      
    <div v-if="loggedIn">
        <span>{{ user.displayName }}</span>
        <b-button @click="logOut()"></b-button>
    </div>
    <b-button v-if="!loggedIn" @click="logIn()">Log In</b-button>
  </div>
</template>

<script>
import { mapGetters, mapActions }from 'vuex'


export default {
  methods: {      
    ...mapActions([
        'logIn',
        'logOut'
    ]),
    ...mapActions({
        logIn: 'logIn',
        logOut: 'logOut'
    })
  },
  computed: {
    ...mapGetters([
        'user',
        'loggedIn'
        ]),    
  },
  created() {
      this.$store.dispatch('retrieveCredentials');
  }
  
};
</script>

<style lang="scss" scoped>
</style>