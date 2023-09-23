<script setup lang="ts">
import { useCountingStore } from '../stores/CountingStore'


const counter = useCountingStore();

</script>


<template>
<h1>About</h1>

<div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">Card Title</h5>
        <div class="row">
            <div class="col-12">
                Current Count: {{ counter.get_count }}
            </div>
            <div class="col-12">
                Current Count: {{ counter.get_count_str }}
            </div>
            <div class="col-12">
                <button 
                    type="button" 
                    class="btn btn-primary"
                    @click="counter.increment"
                >
                    Plus
                </button>
                <button 
                    type="button" 
                    class="btn btn-primary"
                    style="margin-left: 0.5rem"
                    @click="counter.decrement"
                >
                    Minus
                </button>
            </div>
        </div>
        

        
    </div>
</div>
    
</template>


<style scoped>
</style>