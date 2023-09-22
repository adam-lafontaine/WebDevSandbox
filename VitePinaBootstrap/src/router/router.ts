import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Home.vue'

const about = () => { import("../components/About.vue"); };


const routes = [
    { 
        path: "/", 
        name: "home", 
        component: Home 
    },
    { 
        path: "/about", 
        name: "about", 
        component: about 
    },
]

const router = createRouter({
    history: createWebHistory(), 
    
    routes: routes
});


export default router;