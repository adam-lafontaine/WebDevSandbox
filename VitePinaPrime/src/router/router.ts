import Home from '../components/Home.vue'
import Sandbox from '../components/Sandbox.vue'

import { createRouter, createWebHistory } from 'vue-router'


const routes = [
    { path: "/", component: Home },
    { path: "/sandbox", component: Sandbox }
]

const router = createRouter({
    history: createWebHistory(), 
    
    routes: routes
});


export default router;