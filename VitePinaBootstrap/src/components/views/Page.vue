<script setup lang="ts">
//import { ref } from "vue";

const props = defineProps({
    page_id: { type: String, required: true },
    slug: { type: String, required: true }
});

</script>


<template>
<h3>Page {{ $route.params.id }} / {{ $route.params.slug }}</h3>

<p>Page {{ props.page_id }} / {{ props.slug }}</p>

</template>


<style scoped lang="css">
</style>
