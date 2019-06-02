<template>
    <div id="student-dashboard">
        <!-- <div>
            <h5>TNTT Attendance Manager</h5>
        </div> -->
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-nav-form>
                <b-form-input class="mr-sm-2" size="sm" placeholder="Search" v-model="searchWord"></b-form-input>
            </b-nav-form>
            <div class="float-left">
                 <b-button-group size="sm">
                <b-button v-on:click="changeCurrentList(null)"> All </b-button>
                <b-button v-on:click="changeCurrentList(true)"> In </b-button>
                <b-button v-on:click="changeCurrentList(false)"> Out </b-button>
            </b-button-group>
            </div>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        name:'StudentDashBoard',
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
        },
    }
</script>

<style scoped>
.search{
    background-color: white;
    width: 300px;

}

</style>