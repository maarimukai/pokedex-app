<template>
    <nav>
        <a href="../">
            <img src="../assets/pokedex.png" class="logo" alt="pokedex logo">
        </a>
    </nav>
    <main>
        <div class="identification">
            <p>#{{ index }}</p>
            <p>{{ name || upperCase }}</p>
        </div>
        <div>
            <div class="pokeImage">
                <img :src="currentImg" alt="Placeholder image">
            </div>
            <div class="size">
                <p>Weight:</p>
                <p>Height:</p>
            </div>
        </div>
        <div class="pokeInfos">
            <div class="pokeType">
                <p>Type</p>
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
// import api from '../service/pokemon-service'
export default {
    name: 'Pokemon',
    props: {
        index: Number,
        name: String,
        url: String
    },
    // created() {
    //     api.get(this.url).then((response) => {
    //         console.log(this.url)
    //     })
    // }
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
        padding: 5rem 5rem;
        border-radius: 3rem; 
    }

    .identification {
        display: flex;
    }
</style>