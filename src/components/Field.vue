<template>
    <p>
        <label :for="id">{{label}}</label>
        <textarea v-if="typeInput==='textarea'" :id="id" v-model="model"/>
        <input v-else :type="typeInput" :id="id" v-model="model" >
       
    </p>

</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    id: String,
    label: String,
    typeInput : {
        type: String,
        default: 'text'
    }
})

const model = defineModel()

</script>