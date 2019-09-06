<template>
    <div>         
        <div v-for="claim in customClaims" :key="claim.uid">            
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
            customClaims: claims => {
                return claims.filter(claim => {
                    return claim != null
                })
            }
        }        
    }
</script>

<style lang="scss" scoped>

</style>