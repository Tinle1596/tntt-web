<template>
  <div>      
    <div v-if="loggedIn">
        <span>{{ user.displayName }}</span>
        <b-button></b-button>
    </div>
    <b-button v-if="!loggedIn">Log In</b-button>
  </div>
</template>

<script>


export default {
  
}
</script>

<style lang="scss" scoped>

</style>