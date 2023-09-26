<script setup lang="ts">
//import { ref } from "vue";
import { get_current_route } from '@/router/router';


const page_id = () => { return get_current_route().params.id; };
const page_slug = () => { return get_current_route().params.slug; };

</script>


<template>
<h3>Page {{ $route.params.id }} / {{ $route.params.slug }}</h3>

<p>Page {{ page_id() }} / {{ page_slug() }}</p>

</template>


<style scoped lang="css">
</style>
