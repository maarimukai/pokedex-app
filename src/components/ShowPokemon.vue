<template>
    <nav>
        <a href="../">
            <img src="../assets/pokedex.png" class="logo" alt="pokedex logo">
        </a>
    </nav>
    <main>
        <div class="identification">
            <p>#{{ index }}. {{ coisa }}</p>
            <!-- <p>{{ name || upperCase }}</p> -->
        </div>
        <div>
            <div class="pokeImage">
                <img :src="currentImg" alt="Placeholder image">
            </div>
            <div class="size">
                <p>Weight:</p>
                <p>Height:</p>
            </div>
        </div>
        <div class="pokeInfos">
            <div class="pokeType">
                <!-- USAR V-FOR -->
                <p>Type</p> 
                <p>{{ pokemon.type }}</p>
                <p>{{ pokemon.type }}</p>
            </div>
            <div class="pokeAttacks">
                <p>Special Attacks</p>
            </div>
            <div class="pokeWeak">
                <p>Weakness</p>
            </div>
        </div>
    </main>
</template>

<script>
import api from '../service/pokemon-service';

export default {
    props: {
        index: Number,
        name: String,
        url: String
    },
    created() {
        api.get(`https://pokeapi.co/api/v2/pokemon/${this.$route.params.id}`).then((response) => {
            this.pokemon.type = response.data.types[0].type.name;
            this.currentImg = response.data.sprites.front_default;
            this.coisa = response.data.name;
            console.log(response.data);
            console.log(this.$route.params);
        });
    },
    data() {
        return {
            currentImg: '',
            pokemon: {
                type:''
            }
        }
    },
    // filters: {
    //     upperCase: function(value) {
    //         var newName = value[0].toUpperCase() + value.slice(1);
    //         return newName;
    // }
//   }
}
</script>

<style scoped>
    nav {
        text-align: center;
        background-color: rgba(0, 0, 0, 0.5);
    }
    .logo {
        width: 15%;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: rgba(255, 255, 255, 0.5);
        padding: 5rem 5rem;
        border-radius: 3rem; 
    }

    .identification {
        display: flex;
    }
</style>