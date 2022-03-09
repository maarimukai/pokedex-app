<template>
  <body class="bkg-img">
      <h1>POKEDEX</h1> 
      <form>
        <input class="ipt-txt" type="text">
        <!-- <input class="ipt-btn" type="submit" value="search"> -->
        <button class="btn"><i class="fa fa-home"></i></button>
        <Button icon="pi pi-search" class="p-button-warning"/>
      </form>
  </body>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
  #app {
    font-family: 'Montserrat', sans-serif;
    background-color: #E06666;
    background-image: url(https://www.itl.cat/pngfile/big/293-2935792_implied-pokeball-wallpaper-by-giovanni-cotonecoda-fur-circle.png);
    background-position: center;
    width: 100vw;
    height: 100vh;
  }

  body {
    margin: 0;
  }

  h1 {
    margin-top: 0;
    padding-top: 50px;
    text-align: center;
    font-size: 5rem;
    color: whitesmoke;
  }

  form {
    text-align: center;
    padding-top: 5.3rem;
    opacity: 0.7;
  }

  .ipt-txt {
    width: 20vw;
    padding: 10px 15px 10px 15px;
    font-size: 1rem;
    border-radius: 5px;
    border: none;
  }

  .ipt-btn {
    width: 7vw;
    padding: 10px 15px 10px 15px;
    font-size: 1rem;
    color: darkgray;

  }

</style>
