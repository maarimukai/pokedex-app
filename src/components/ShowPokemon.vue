<template>
    <nav>
        <h1>Pokemon</h1>
    </nav>
</template>

<script>
import { getPokemonList } from "../service/pokemon-service.js";
import { onMounted } from "vue";

export default {
    setup() {

        onMounted(() => {
            getPokemonList().then(resp => {
                console.log(resp);
            });
        });

        return {};
    }
}
</script>

<style scoped>

</style>