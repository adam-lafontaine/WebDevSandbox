
import './styles/bs-theme.scss'
import './styles/style.css'

import * as bootstrap from 'bootstrap'


import { createApp } from 'vue'
import router from './router/router'
import { createPinia } from 'pinia'



import App from './App.vue'
const app = createApp(App);

const pinia = createPinia();


app.use(pinia);
app.use(router);

app.mount('#app');
