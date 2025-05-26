<template>
  <div class="grid" :style="stylee">
    <slot></slot>
  </div>  
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    width:{
        type: Number,
        default: 300
    }
})

//création d'une variable
const stylee = computed(()=>({
    '--width':`${props.width}px`
}))
</script>

<style>
.grid{
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(var(--width),1fr));
    gap: 1rem;
}

.grid > * {
    margin: 0;
}
</style>