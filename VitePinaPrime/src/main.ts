import './styles/bootstrap.scss'
import * as bootstrap from 'bootstrap'


//import 'primevue/resources/themes/bootstrap4-light-blue/theme.css'
//import 'primevue/resources/themes/bootstrap4-light-purple/theme.css'
//import 'primevue/resources/themes/bootstrap4-dark-blue/theme.css'
//import 'primevue/resources/themes/bootstrap4-dark-purple/theme.css'
//import 'primevue/resources/themes/md-light-indigo/theme.css'
//import 'primevue/resources/themes/md-light-deeppurple/theme.css'
//import 'primevue/resources/themes/md-dark-indigo/theme.css'
//import 'primevue/resources/themes/md-dark-deeppurple/theme.css'
//import 'primevue/resources/themes/mdc-light-indigo/theme.css'
//import 'primevue/resources/themes/mdc-light-deeppurple/theme.css'
//import 'primevue/resources/themes/mdc-dark-indigo/theme.css'
//import 'primevue/resources/themes/mdc-dark-deeppurple/theme.css'
//import 'primevue/resources/themes/fluent-light/theme.css'
//import 'primevue/resources/themes/lara-light-blue/theme.css'
//import 'primevue/resources/themes/lara-light-indigo/theme.css'
//import 'primevue/resources/themes/lara-light-purple/theme.css'
//import 'primevue/resources/themes/lara-light-teal/theme.css'
//import 'primevue/resources/themes/lara-dark-blue/theme.css'
//import 'primevue/resources/themes/lara-dark-indigo/theme.css'
//import 'primevue/resources/themes/lara-dark-purple/theme.css'
//import 'primevue/resources/themes/lara-dark-teal/theme.css'
//import 'primevue/resources/themes/soho-light/theme.css'
//import 'primevue/resources/themes/soho-dark/theme.css'
//import 'primevue/resources/themes/viva-light/theme.css'
//import 'primevue/resources/themes/viva-dark/theme.css'
//import 'primevue/resources/themes/mira/theme.css'
//import 'primevue/resources/themes/nano/theme.css'
//import 'primevue/resources/themes/saga-blue/theme.css'
//import 'primevue/resources/themes/saga-green/theme.css'
//import 'primevue/resources/themes/saga-orange/theme.css'
//import 'primevue/resources/themes/saga-purple/theme.css'
//import 'primevue/resources/themes/vela-blue/theme.css'
//import 'primevue/resources/themes/vela-green/theme.css'
//import 'primevue/resources/themes/vela-orange/theme.css'
//import 'primevue/resources/themes/vela-purple/theme.css'
//import 'primevue/resources/themes/arya-blue/theme.css'
//import 'primevue/resources/themes/arya-green/theme.css'
//import 'primevue/resources/themes/arya-orange/theme.css'
//import 'primevue/resources/themes/arya-purple/theme.css'

//import 'primeicons/primeicons.css';


import { createApp } from 'vue'
import router from './router/router'
import { createPinia } from 'pinia'
//import PrimeVue from 'primevue/config';

//import './style.css'
//import HWApp from './HWApp.vue'
//const app = createApp(HWApp);

import App from './App.vue'
const app = createApp(App);

const pinia = createPinia();


//import Menubar from 'primevue/menubar';
import Card from 'primevue/card';
import Button from 'primevue/button';
import Chart from 'primevue/chart';

//app.component('Menubar', Menubar);
app.component('Card', Card);
app.component('Button', Button);
app.component('Chart', Chart);


app.use(pinia);
//app.use(PrimeVue);
app.use(router);

app.mount('#app');
