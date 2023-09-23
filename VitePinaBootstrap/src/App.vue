<script setup lang="ts">
import { ref } from "vue";


const menu_items = ref([
    { id: 1, label: "Home", route: "/" },
    { id: 2, label: "About", route: "/about" },
]);

</script>


<template>
<nav class="navbar navbar-expand-lg navbar-dark nav-color">
    <div class="container-fluid">
        <button 
            class="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            ata-bs-target="#navbarLinks" 
            aria-controls="navbarLinks" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarLinks">
        <a class="navbar-brand" href="#">Brand</a>
        <ul class="navbar-nav" v-for="item in menu_items" :key="item.id">
            <li class="nav-item">
                <RouterLink class="nav-link" :to="item.route">{{ item.label }}</RouterLink>
            </li>
        </ul>
        </div>
    </div>
</nav>
<div class="container">
    <RouterView></RouterView>
</div>
<footer class="bg-info text-center text-lg-start fixed-bottom nav-color footer-padding">
    <div>
        Footer
    </div>
</footer>
</template>


<style scoped>

</style>