<script setup lang="ts">
import { ref } from "vue";


const data = ref("Footer");

</script>


<template>
<footer class="text-center text-lg-start fixed-bottom bg-primary text-white footer-padded">
    <div>
        {{ data }}
    </div>
</footer>
</template>


<style lang="css">

</style>