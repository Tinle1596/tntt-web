<template>
    <div>
        <v-card>
            Attendance
            <v-spacer></v-spacer>
            <v-text-field
            v-model="search"
            append-icon="search"
            label="search student"
            single-line
            hide-details
            dense
            ></v-text-field>            
            <v-data-table
            :headers="headers"
            :items="timestamps"
            :search="search"
            >
            </v-data-table>
        </v-card>
    </div>
</template>

<script>
    export default {        
        props: {
            timestamps: Array
        },
        components: {
            convertedTimestamps() {

            }
        },
        data() {
            return {
                search: '',
                headers: [
                    {
                        text: 'Student',
                        align: 'left',
                        sortable: false,
                        value: 'studentFullName'                        
                    },
                    { text: 'In', value: 'checkIn'},
                    { text: 'Out', value: 'checkOut'},
                    { text: 'Date', value: 'eventDate'},
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>