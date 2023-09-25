<script setup lang="ts">
import { ref } from "vue";


const menu_items = ref([
    { id: 1, label: "Home", route: { name: "home" } },
    { id: 2, label: "About", route: { name: "about" } },
]);

</script>


<template>
<nav class="navbar bg-primary navbar-expand-lg" data-bs-theme="dark">
    <div class="container-fluid">
        <button 
            class="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarLinks" 
            aria-controls="navbarLinks" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarLinks">
        <a class="navbar-brand d-none d-lg-block" href="#">Brand</a>
        <ul class="navbar-nav" v-for="item in menu_items" :key="item.id">
            <li class="nav-item">
                <RouterLink class="nav-link" :to="item.route">{{ item.label }}</RouterLink>
            </li>
        </ul>
        </div>
    </div>
</nav>
</template>


<style lang="css">

</style>