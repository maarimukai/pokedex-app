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
        <div class="content">
            <div class="basicInfo">
                <div class="pokeImage">
                    <img class="pokeimg" :src="pokeimage" alt="Placeholder image">
                </div>
                <div class="pokeType">
                    <h4>Type</h4> 
                    <div class="type-box" v-for="item in poketypes" :key="item" :class="item.type.name.toLowerCase()">
                        <p>{{ item.type.name.toUpperCase() }}</p>
                    </div>
                </div>
                <div class="size">
                    <p>
                        <span>Weight:</span> {{ pokeweight / 10 }} kg
                    </p>
                    <p>
                        <span>Height:</span> {{ pokeheight / 10 }} m
                    </p>
                </div>
            </div>
            <div class="pokeInfos">
                <div class="pokeStats">
                    <h4>Stats</h4>
                    <div v-for="info in pokestats" :key="info">
                        <p>{{ info.stat.name }}: {{ info.base_stat }} </p>
                    </div>
                    <p>HP: 255 / ATTACK: 200 / DEFENSE: 250 / SPECIAL ATTACK: 200 / SPECIAL DEFENSE: 250 / SPEED: 250</p>
                </div>
                <div class="pokeAbilities">
                    <h4>Abilities</h4>
                    <div v-for="ability in pokeability" :key="ability">
                        <p>{{ ability.ability.name }}</p>
                    </div>
                </div>
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
        url: String,
    },
    created() {
        api.get(`https://pokeapi.co/api/v2/pokemon/${this.$route.params.id}`).then((response) => {
            const mainImage = response.data.sprites.other.dream_world.front_default;
            const secondImage = response.data.sprites.front_default;
            this.pokeimage = mainImage || secondImage;
            this.pokename = response.data.species.name.toUpperCase();
            this.pokeindex = response.data.id;
            this.poketypes = response.data.types;
            this.pokeweight = response.data.weight;
            this.pokeheight = response.data.height;
            this.pokestats = response.data.stats;
            this.pokeability = response.data.abilities;
        });

    },
    data() {
        return {
            pokeimage: '',
            pokemon: {
                type:''
            }
        }
    },
}

</script>

<style lang="scss">
@import "../stylespoke/typecolor";
    body {
        background-color: #7F0D0D;
    }

    nav {
        text-align: center;
        background-color: rgba(0, 0, 0, 0.5);
    }
    .logo {
        width: 120px;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    main {
        width: 1000px;
        height: 500px; 
        display: flex;
        flex-direction: column;
        background-color: rgba(255, 255, 255, 0.5);
        padding: 1.5rem;
        margin-left: auto;
        margin-right: auto;
        border-radius: 3rem;
    }

    h3 {
        font-size: 3rem;
        margin-top: 0;
        margin-bottom: 30px;
        text-align: center;
    }

    .content {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .basicInfo{
        display: flex;
        flex-direction: column;
        align-items: center;
        // margin-left: 80px;
        margin-right: 150px;
    }

    .pokeInfos {
        display: flex;
        flex-direction: column;
        align-content: center;
        margin-left: 150px;
        // margin-right: 80px;
    }

    .pokeimg {
        height: 200px;
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
</style>