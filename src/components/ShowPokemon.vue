<template>
    <nav>
        <a href="../">
            <img src="../assets/pokedex.png" class="logo" alt="pokedex logo">
        </a>
    </nav>
    <main>
        <div class="identification" :class="this.poketypes ? this.poketypes[0].type.name.toLowerCase() : ''">
            <Button icon="pi pi-arrow-left" @click="changePage('prev')" :disabled="['1', 'bulbasaur'].includes(this.$route.params.id)" class="ipt-bttn" :class="this.poketypes ? this.poketypes[0].type.name.toLowerCase() : ''" />
            <h3>#{{ pokeindex }}. {{ pokename }}</h3>
            <Button icon="pi pi-arrow-right" @click="changePage('next')" class="ipt-bttn" :class="this.poketypes ? this.poketypes[0].type.name.toLowerCase() : ''"/>
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
                        <strong>Weight:</strong> {{ pokeweight / 10 }} kg
                    </p>
                    <p>
                        <strong>Height:</strong> {{ pokeheight / 10 }} m
                    </p>
                </div>
            </div>
            <div class="pokeInfos">
                <div class="pokeStats">
                    <h4>Stats</h4>
                    <Chart type="radar" :data="this.chartData" :options="this.chartOption" />
                </div>
                <div class="pokeAbilities">
                    <h4>Abilities</h4>
                    <div v-for="ability in pokeability" :key="ability" class="capitalized">
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
            
            var nameStats = []
            for (const info of this.pokestats) {  
                if(info.stat.name === "special-defense") {
                    nameStats.push("SP DEF")               
                } else if(info.stat.name === "special-attack") {
                    nameStats.push("SP ATK") 
                } else {
                    nameStats.push(info.stat.name.toUpperCase())   
                }
            }

            var valueStats = []
            for (const info of this.pokestats) {
                valueStats.push(info.base_stat)    
            }

            this.chartData = {
                labels: nameStats,
                datasets: [
                    {
                        backgroundColor: 'rgba(179,181,198,0.2)',
                        borderColor: 'rgba(179,181,198,1)',
                        pointBackgroundColor: 'rgba(179,181,198,1)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(179,181,198,1)',
                        data: valueStats
                    },
                ]
            }
            this.chartOption = {
                plugins: {
                    legend: {
                        display: false,
                        labels: {
                            color: '#495057'
                        }
                    }
                },
                scales: {
                    r: {
                        pointLabels: {
                            color: '#495057',
                        },
                        grid: {
                            color: '#ebedef',
                        },
                        angleLines: {
                            color: '#ebedef'
                        },
                        suggestedMin: 0,
                        min: 0,
                        max: 255
                    }
                }
            }
        });
    },
    data() {
        return {
            pokeimage: '',
            pokemon: {
                type:''
            },
            
        }
    },
    methods: {
        goToNextPokemon() {
            api.get(`https://pokeapi.co/api/v2/pokemon/${this.$route.params.id}`).then((response) => {
                this.pokeindex = response.data.id;
            });
        window.location.href = `/pokemon/${this.pokeindex + 1}`;
        },
        goToPreviousPokemon() {
            api.get(`https://pokeapi.co/api/v2/pokemon/${this.$route.params.id}`).then((response) => {
                this.pokeindex = response.data.id;
            });
        window.location.href = `/pokemon/${this.pokeindex - 1}`;
        },
        changePage(prevOrNext) {
            if(prevOrNext === 'prev') {
                this.goToPreviousPokemon();
            } else {
                this.goToNextPokemon();
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

    .identification {
        display: flex;
        align-content: center;
        justify-content: space-between;
        box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.3);
        border-radius: 80px;
        padding-top: 3.5px;
    }

    h3 {
        font-size: 3rem;
        margin-top: 0;
        margin-bottom: 0;
        text-align: center;
    }

    .ipt-bttn {
        width: 4rem;
        height: 4rem;
        font-size: 1.5rem;
        background-color: Transparent;
        border: none;
        cursor: pointer;
        margin-left: 20px;
        margin-right: 20px;
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

    .pokeimg {
        height: 200px;
        margin-bottom: 0;
    }

    // h4 {
    //     margin: 0;
    // }

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
    }

    .type-box-sml {
        margin: 0;
    }

    .capitalized {
        text-transform: capitalize;
    }

    .pokeInfos {
        display: flex;
        flex-direction: column;
        align-content: center;
        margin-left: 150px;
        // margin-right: 80px;
    }

</style>