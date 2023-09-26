import { createRouter, createWebHistory, RouteLocationNormalizedLoaded } from 'vue-router'

type Route = RouteLocationNormalizedLoaded;

import Home from '@views/Home.vue'

const about = () => { return import("@views/About.vue"); };
const page = () => { return import("@views/Page.vue"); }


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
    {
        path: "/page/:id/:slug",
        name: "page",
        component: page,
        props: (r: Route) => ({ page_id: r.params.id, slug: r.params.slug }),
    }
];


const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: "router-link-active active",
    
    routes: routes
});


const get_current_route = () => { return router.currentRoute.value; };


export { router, get_current_route };