<template>
  <div class="forms" v-if="!searchPokemon">
    <form>
      <h1>POKEDEX</h1>
      <input class="ipt-txt" type="text">
      <Button @click="showPokemon" icon="pi pi-search" class="ipt-btn" type="submit"/>
    </form>
  </div>
  <show-pokemon v-if="searchPokemon" ></show-pokemon>
  <!-- <div v-for="(pokemon, index) in list" :key="index">
    {{pokemon.name}}
  </div> -->
</template>

<script>
import ShowPokemon from "./ShowPokemon.vue";
import { getPokemonList } from "../service/pokemon-service.js";
import { onMounted, ref } from "vue";

export default {
  setup() {
      const list = ref ([]);

      onMounted(() => {
          getPokemonList().then(resp => {
              list.value = resp.results;
          });
      });

      return { list };
  },
  components: {
    ShowPokemon
  },
  data() {
    return {
      searchPokemon: false
    }
  },
  methods: {
    showPokemon() {
      this.searchPokemon = true;
    }
  }
}
</script>

<style>
  .forms {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
  }

  form {
    background-color: rgba(255, 255, 255, 0.5);
    padding: 4rem 3rem;
    border-radius: 3rem;  
  }

  h1 {
    margin-top: 0;
    text-align: center;
    font-size: 5rem;
    color: whitesmoke;
    text-shadow: 5px 5px 5px #000000;
  }


  .ipt-txt {
    width: 35vw;
    /* margin-top: 5rem; */
    padding: 15px;
    font-size: 1.5rem;
    font-weight: bold;
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
