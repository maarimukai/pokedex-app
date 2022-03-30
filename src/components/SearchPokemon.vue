<template>
  <div class="main">
    <div class="form">
      <img class="imglogo" src="../assets/pokedex.png" alt="pokemon logo">
      <form>
        <input class="ipt-txt" type="text" placeholder="Search Pokemon" v-model="value">
        <Button @click="showPokemon(value)" icon="pi pi-search" class="ipt-btn" type="submit"/>
      </form>
    </div>
  </div>
</template>

<script>
import api from "../service/pokemon-service.js";

export default {
  data() {
    return {
      pokemons: [],
      filteredPokemons: [],
      search: '',
      value: ''
    }
  },
  created() {
    api.get('pokemon?limit=151&offset=0').then((response) => {
      this.pokemons = response.data.results;
      this.filteredPokemons = response.data.results;
    });
  },
  methods: {
    showPokemon(id = this.value) {
      this.filteredPokemons = this.pokemons.filter((pokemon) => pokemon.name == this.search);
      console.log(this.search);
      this.$router.push({ name: 'pokemon', params: { id } })
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

  .imglogo {
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
