import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Home from "./views/Home.vue";
import Pokemon from "./views/Pokemon.vue";

import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import 'primeicons/primeicons.css';

const routes = [
    { path: "/", name: "home", component: Home },
    { path: "/pokemon/:id", name: "pokemon", component: Pokemon }
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