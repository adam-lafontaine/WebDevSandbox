<script setup lang="ts">
import Navbar from '@components/Navbar.vue';
import Footer from '@components/Footer.vue';
import FooterXS from '@components/FooterXS.vue'

</script>


<template>
    
<Navbar/>

<div class="container">
    <RouterView></RouterView>
</div>

<Footer class="d-none d-lg-block"/>
<FooterXS class="d-lg-none" />
</template>


<style scoped>

</style>