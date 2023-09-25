import { createRouter, createWebHistory } from 'vue-router'

import Home from '@views/Home.vue'

const about = () => { return import("@views/About.vue"); };


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