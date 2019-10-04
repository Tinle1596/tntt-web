<template>
  <div>
      <user-list :users="users"></user-list>          
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import UserList from './UserList'

    export default {
        data() {
            return {
                email: ''
            }
        },
        components: {
            UserList
        },
        methods: {            
            getAllUsers: function() {
                this.$store.dispatch('listAllUsers')
            }
            
        },
        computed: {
            ...mapGetters([
                'users',
                'getUser'
            ])
        },
        created() {
            this.$store.dispatch('listAllUsers')
        },
    }
</script>

<style lang="scss" scoped>
</style>