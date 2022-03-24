<template>
    <search-pokemon></search-pokemon>
</template>

<script>
import SearchPokemon from "../components/SearchPokemon.vue"

export default {
    components: { SearchPokemon },
    data() {
        return {
            pokemon: { name: '', url: '' }
        }
    },
    updated() {
        this.rota = this.$route
        this.$emit('homeActived', this.rota.name)
    }
}
</script>

<style scoped>

</style>