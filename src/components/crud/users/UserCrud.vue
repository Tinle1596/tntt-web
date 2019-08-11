<template>
  <div>
    <v-text-field label="email" v-model="email"></v-text-field>
    <v-btn color="success" @click="getUserByEmail(email)">get User</v-btn>
    {{ getUser }}
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

    export default {
        data() {
            return {
                email: ''
            }
        },
        methods: {
            addAdminByEmail: function(payload) {
                this.$store.dispatch('addAdminByEmail', payload)
            },
            getUserByEmail: function(payload) {
                this.$store.dispatch('getUserByEmail', payload)
            },
            getAllUsers: function() {
                this.$store.dispatch('listAllUsers')
            }
            
        },
        computed: {
            ...mapGetters([
                'users',
                'getUser'
            ])
        }
    }
</script>

<style lang="scss" scoped>
</style>