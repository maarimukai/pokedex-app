<template>
  <div class="main" v-if="!searchPokemon">
    <div class="form">
      <img src="../assets/pokedex.png" alt="pokemon logo">
      <div>
        <input class="ipt-txt" type="text" placeholder="Search Pokemon" v-model="search">
        <Button @click="showPokemon" icon="pi pi-search" class="ipt-btn" type="submit"/>
      </div>
      <!-- <h1>POKEDEX</h1> -->
      <!-- <input class="ipt-txt" type="text">
      <Button @click="showPokemon" icon="pi pi-search" class="ipt-btn" type="submit"/> -->
    </div>
  </div>
  <div v-if="searchPokemon">
    <div :key="pokemon.url" v-for="(pokemon, index) in filteredPokemons">
      <show-pokemon :index="index + 1" :name="pokemon.name" :url="pokemon.url"/>
    </div>
  </div>
</template>

<script>
import ShowPokemon from "./ShowPokemon.vue";
import api from "../service/pokemon-service.js";
// import { onMounted, ref } from "vue";

export default {
  components: {
    ShowPokemon
  },
  // setup() {
  //     const list = ref ([]);

  //     onMounted(() => {
  //         api().then(resp => {
  //             list.value = resp.results;
  //         });
  //     });

  //     return { list };
  // },
  data() {
    return {
      searchPokemon: false,
      pokemons: [],
      filteredPokemons: [],
      search: ''
    }
  },
    created() {
    api.get('pokemon?limit=151').then((response) => {
      this.pokemons = response.data.results;
      this.filteredPokemons = response.data.results;
    });
  },
  methods: {
    showPokemon() {
      this.searchPokemon = true;
      this.filteredPokemons = this.pokemons;
      if(this.search == '' || this.search == ' ') {
        this.filteredPokemons = this.pokemons;
      }  else {
        this.filteredPokemons = this.pokemons.filter((pokemon) => pokemon.name == this.search);
      }
      console.log(this.search)
    }
  }
}
</script>

<style>
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
  }

  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.5);
    padding: 5rem 5rem;
    border-radius: 3rem;  
  }

  img {
    margin-top: 0;
    margin-bottom: 4rem;
  }


  .ipt-txt {
    width: 35vw;
    /* margin-top: 5rem; */
    padding: 15px;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    color: #c03b3b;
    border-radius: 80px;
    border: none;
    background-color: whitesmoke;
    opacity: 0.9;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.5);
  }

  .ipt-btn {
    width: 4rem;
    height: 4rem;
    /* padding: 13px; */
    font-size: 1.5rem;
    background-color: #a02e2e;
    border: none;
    border-radius: 80px;
    color: whitesmoke;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }

</style>
