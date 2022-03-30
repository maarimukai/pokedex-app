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
                <h4>Type</h4> 
                <div class="type-box" v-for="item in poketypes" :key="item" :class="item.type.name.toLowerCase()">
                    <p>{{ item.type.name.toUpperCase() }}</p>
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
import { reactive } from '@vue/reactivity';
import api from '../service/pokemon-service';

export default {
    props: {
        index: Number,
        name: String,
        url: String,
        pokemons: { type: Object }
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
        
        const state = reactive({
            colors: {
                normal: "#d3d3af",
                fighting: "#d56723",
                flying: "#a1d1f8",
                poison: "#7fa8c9",
                ground: "#7c7e29",
                rock: "#a38c21",
                bug: "#729f3f",
                ghost: "#7b62a3",
                steel: "#9eb7b8",
                fire: "#fd7d24",
                water: "#4592c4",
                grass: "#9bcc50",
                electric: "#eed535",
                psychic: "#f366b9",
                ice: "#51c4e7",
                dragon: "#3d167c",
                dark: "#303030",
                fairy: "#fdb9e9",
                unknown: "#000",
                shadow: "#333",
            }
        });
        console.log(state.poketypes);
        console.log(reactive);
    },

    data() {
        return {
            currentImg: '',
            pokemon: {
                type:''
            }
        }
    },
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

    .type-box {
        display: inline-block;
        font-weight: 400;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        border: 1px solid transparent;
        padding: 0.175rem 0.5rem 0.16rem 0.5rem;
        margin: 3px 7.5px 3px 0;
        font-size: 0.7rem;
        font-weight: bold;
        text-transform: uppercase;
        line-height: 1.5;
        color: #fff
    }

    .type-box-sml {
        margin: 0;
    }

    .grass {
        background-color: #8bc560;
    }

    .poison {
        background-color: #94489b;
    }
</style>