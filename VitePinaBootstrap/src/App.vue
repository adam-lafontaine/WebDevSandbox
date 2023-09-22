<script setup lang="ts">
import { ref } from "vue";


const menu_items = ref([
    { id: 1, label: "Home", route: "/" },
    { id: 2, label: "About", route: "/about" },
]);

</script>


<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a class="navbar-brand" href="#">Hidden brand</a>
      <ul class="navbar-nav" v-for="item in menu_items" :key="item.id">
        <li class="nav-item">
          <RouterLink class="nav-link" :to="item.route">{{ item.label }}</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
<RouterView></RouterView>
</template>


<style scoped>

</style>