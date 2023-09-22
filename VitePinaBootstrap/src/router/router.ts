import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Home.vue'

const about = () => { return import("../components/About.vue"); };


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
    linkActiveClass: "router-link-active active",
    
    routes: routes
});


export default router;