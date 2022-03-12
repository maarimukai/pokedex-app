<template>
   <form v-if="!searchPokemon">
    <h1>POKEDEX</h1>
    <input class="ipt-txt" type="text">
    <Button @click="showPokemon" icon="pi pi-search" class="ipt-btn" type="submit"/>
  </form>
  <show-pokemon v-if="searchPokemon" ></show-pokemon>
</template>

<script>
import ShowPokemon from "./ShowPokemon.vue";
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
  h1 {
    margin-top: 0;
    padding-top: 30px;
    text-align: center;
    font-size: 5rem;
    color: whitesmoke;
    text-shadow: 5px 5px 5px #000000;
  }

  form {
    text-align: center;
    padding-top: 5.5rem;
  }

  .ipt-txt {
    width: 25vw;
    padding: 15px 15px 15px 15px;
    font-size: 1rem;
    font-weight: bold;
    color: #c03b3b;
    border-radius: 80px;
    border: none;
    background-color: whitesmoke;
    opacity: 0.9;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.5);
  }

  .ipt-btn {
    width: 5vw;
    padding: 10px 15px;
    font-size: 1.5rem;
    background-color: #c03b3b;
    border: none;
    border-radius: 50px;
    color: whitesmoke;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }

</style>
