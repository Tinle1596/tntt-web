<template>
    <div>
         <v-data-table
         :headers="headers"
         :items="getStudents"
         :items-per-page="10"
         >
         <template v-slot:top>
             <v-toolbar flat color="white">
                 <v-toolbar-title>Mange Students</v-toolbar-title>
                 <v-divider
                 class="mx-4"
                 inset
                 vertical
                 ></v-divider>
                 <v-spacer></v-spacer>
                 <v-dialog></v-dialog>
             </v-toolbar>
         </template>
         </v-data-table>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

    export default {
        data() {
            return {
                headers: [
                    {
                        text: 'First Name',
                        align: 'left',
                        sortable: true,
                        value: 'firstName'
                    },
                    {
                        text: 'Last Name',
                        align: 'left',
                        sortable: true,
                        value: 'lastName'
                    },
                    {
                        text: 'Nganh',
                        align: 'left',
                        sortable: true,
                        value: 'group'
                    },
                    {
                        text: 'Sex',
                        align: 'left',
                        sortable: false,
                        value: 'sex'
                    },
                    {
                        text: 'Phone Number',
                        align: 'left',
                        sortable: false,
                        value: 'phoneNumber'
                    }
                ],
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