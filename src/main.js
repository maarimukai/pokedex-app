import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import ShowPokemon from "./components/ShowPokemon";
import SearchPokemon from "./components/SearchPokemon";

import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext'
import 'primeicons/primeicons.css';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: SearchPokemon },
        { path: "/pokemon/:id", name: "pokemon", component: ShowPokemon }
    ]
});


const app = createApp(App);
app.component("Button", Button);
app.component("InputText", InputText);
app.use(PrimeVue);
app.use(router);
app.mount('#app');