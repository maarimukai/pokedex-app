import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import 'primeicons/primeicons.css';

const app = createApp(App);
app.component("Button", Button);

app.use(PrimeVue);

app.mount('#app');