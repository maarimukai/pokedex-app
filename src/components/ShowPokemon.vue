<template>
    <nav>
        <a href="../">
            <img src="../assets/pokedex.png" class="logo" alt="pokedex logo">
        </a>
    </nav>
    <main>
        <div class="identification">
            <h3>#{{ pokeindex }}. {{ pokename }}</h3>
            <!-- <p>{{ name || upperCase }}</p> -->
        </div>
        <div>
            <div class="pokeImage">
                <img :src="currentImg" alt="Placeholder image">
            </div>
            <div class="size">
                <p>Weight: {{ pokeweight / 10 }} kg </p>
                <p>Height: {{ pokeheight / 10 }} m </p>
            </div>
        </div>
        <div class="pokeInfos">
            <div class="pokeType">
                <p>Type</p> 
                <div v-for="item in poketypes" :key="item">
                    <p>{{ item.type.name }}</p>
                </div>
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
            this.currentImg = response.data.sprites.other.dream_world.front_default;
            this.pokename = response.data.name;
            this.pokeindex = response.data.id;
            this.poketypes = response.data.types;
            this.pokeweight = response.data.weight;
            this.pokeheight = response.data.height;
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
        padding: 3rem 3rem;
        border-radius: 3rem; 
    }

    .identification {
        display: flex;
    }

    img {
        width: 12vw;
        margin-bottom: 0;
    }
</style>