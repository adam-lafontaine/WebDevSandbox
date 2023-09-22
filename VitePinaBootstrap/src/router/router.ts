import Home from '../components/Home.vue'
import About from '../components/About.vue'

import { createRouter, createWebHistory } from 'vue-router'


const routes = [
    { path: "/", component: Home },
    { path: "/about", component: About },
]

const router = createRouter({
    history: createWebHistory(), 
    
    routes: routes
});


export default router;