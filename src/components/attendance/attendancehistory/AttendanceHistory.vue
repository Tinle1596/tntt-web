<template>
    <div>
        <v-card> Test from attendance history component </v-card>        
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

    export default {
        name:'AttendanceViewer',
        props: {
            
        },
        data(){
            return {
                
            };
        },
        created() {
            this.$store.dispatch('retrieveTimestamps')
        },
        methods:{
            
        },
        computed: {
            ...mapGetters([
                'timestamps'
            ])
        },
    }
</script>

<style scoped>

</style>