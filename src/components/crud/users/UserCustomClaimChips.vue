<template>
    <div>         
        <div v-for="claim in claims" :key="claim.uid">            
            <v-chip>{{ claim }}</v-chip>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            claims: Array
        },
        data() {
            return {
                
            }
        },
        computed: {
                        
        }        
    }
</script>

<style lang="scss" scoped>

</style>