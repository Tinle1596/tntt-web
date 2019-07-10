<template>
    <div>
        <v-bottom-nav fixed :value="toggleBottomFilter" :active.sync="currentFilter">
            <v-btn flat value="All" @click="changeCurrentList(null)">
                <span></span>
                <v-icon>group</v-icon>                
            </v-btn>
            <v-btn flat value="In" @click="changeCurrentList(true)">
                <v-icon>person</v-icon>
            </v-btn>
            <v-btn flat value="Out" @click="changeCurrentList(false)">
                <v-icon>person_outline</v-icon>
            </v-btn>
        </v-bottom-nav>
    </div>
</template>

<script>
    export default {
        name:'StudentDashBoard',
        data() {
            return {
                currentFilter: 'All',
                toggleBottomFilter: true,
                currentRoute: this.$route.name
            }
        },
        methods:{
            changeCurrentList: function(payload) {
                this.$store.dispatch('filterStudentAttendance', payload)
            }
        },
        computed: {
            searchWord:{
                get(){
                    return this.$store.state.searchWord
                },
                set(value){
                    this.$store.dispatch('updateSearchWord', value.toLowerCase())
                }
            }            
        }        
    }
</script>

<style scoped>


</style>