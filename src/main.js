import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import ShowPokemon from "./components/ShowPokemon";
import SearchPokemon from "./components/SearchPokemon";
// import teste from "./components/teste";

import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import 'primeicons/primeicons.css';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", name:'home', component: SearchPokemon },
        // { path: "/teste", name:'teste', component: teste },
        { path: "/pokemon/:id", name: "pokemon", component: ShowPokemon }
    ]
});


const app = createApp(App);
app.component("Button", Button);
app.use(PrimeVue);
app.use(router);
app.mount('#app');