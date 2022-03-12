<template>
  <!-- <router-view></router-view> -->
  <form v-if="!searchPokemon">
    <h1>POKEDEX</h1>
    <input class="ipt-txt" type="text">
    <Button @click="showPokemon" icon="pi pi-search" class="ipt-btn" type="submit"/>
  </form>
  <show-pokemon v-if="searchPokemon" ></show-pokemon>
</template>

<script>
import ShowPokemon from "./components/ShowPokemon.vue";

export default {
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
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
  #app {
    font-family: 'Montserrat', sans-serif;
    background-color: #7F0D0D;
    background-image: url('https://snz04pap002files.storage.live.com/y4mgZ9rb2dmOiohC0scRKs5C50GLjrTN8FbjqWQsLPaBUTngUBL903o5sMfn-F6Y3sg7q9qjkQ0B4uU4VT_iXOg6tjSapdUMUyt1zeN0Q8AguAx-sHYhkYTaO4nIf0lcMKcYpPiR2NUzUeL7K-i18xsCLdgq-Jl2-AI8tNlIFNC7kJApE9r3yggookqo-PAz4Mf?width=1024&height=576&cropmode=none');
    background-position: center;
    width: 100vw;
    height: 100vh;
  }

  body {
    margin: 0;
  }

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
  }

</style>
