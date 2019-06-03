<template>
    <div id="student-dashboard">
        <!-- <div>
            <h5>TNTT Attendance Manager</h5>
        </div> -->
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-nav-form>
                <b-form-input class="mr-sm-2" size="sm" placeholder="Search"></b-form-input>
            </b-nav-form>            
        </b-navbar>
        <ul v-for="timestamp in timestamps" :key="timestamp.id ">
            <li>
                {{ timestamp.id }}
            </li>
        </ul>
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
.search{
    background-color: white;
    width: 300px;

}

</style>