<template>
    <div>
        {{getStudents}}
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

    export default {
        data() {
            return {
                
            }
        },
        components:{

        },
        computed:{
            ...mapGetters([
                'getStudents'
            ])  
        },
        methods:{

        },        
        created(){
            this.$store.dispatch('getStudents')
        }        
    }
</script>

<style lang="scss" scoped>

</style>