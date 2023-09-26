<script setup lang="ts">
</script>


<template>
<h3>Page not found</h3>
<div class="container">
    <p class="text-center">
        <RouterLink :to="{name: 'home'}">
            <span class="material-icons-outlined home-icon">home</span>
            <br>
            Back to Home
        </RouterLink>
        
    </p>    
</div>
</template>


<style scoped lang="css">

.home-icon {
    font-size: 48px;
}

</style>