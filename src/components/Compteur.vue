<template>
    <h1 class="text-3xl my-3">Compteur</h1>
    <p>Nombre : {{ count }}</p>
   
</template>

<script setup>
import { computed, onActivated, onDeactivated, onMounted, onUnmounted, ref } from 'vue';

const count = ref(0)
let intervalleId  = null
onActivated(()=>{
    intervalleId = setInterval(()=>{
        count.value++
    },1000)
})

onDeactivated(()=>{
    clearInterval(intervalleId)
})
</script>