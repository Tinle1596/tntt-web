<template>
    <div>
        <v-toolbar dense>
            <v-text-field flat floating label="search" prepend-inner-icon="search" solo-inverted v-model="searchWord">               
            </v-text-field>
        </v-toolbar>
    </div>
</template>

<script>
    export default {
        computed: {
            searchWord: {
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