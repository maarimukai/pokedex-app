import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import ShowPokemon from "./components/ShowPokemon";
import SearchPokemon from "./components/SearchPokemon";

import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import 'primeicons/primeicons.css';

const routes = [
    { path: "/", component: SearchPokemon },
    { path: "/pokemon/:id", name: "pokemon", component: ShowPokemon }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});


const app = createApp(App);
app.component("Button", Button);
app.use(PrimeVue);
app.use(router);


app.mount('#app');