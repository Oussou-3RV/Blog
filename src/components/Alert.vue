<template>
    <div :class="classes">
        <slot></slot>
        <button @click="Emits('close')">&times;</button>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    type:String
})

const Emits = defineEmits('close')
const classes = computed(()=> `alert alert-${props.type}`)
</script>

<style>
.alert{
    position: relative;
    padding: 0.75rem 1.25rem;
    margin-bottom: 1rem;
    border: 1px solid red;
    border-radius: .25rem;
}

.alert-danger{
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;

}

.alert button{
    background-color: transparent;
    border: none;
    position: absolute;
    right:.50rem;
    top: 0rem;
}

</style>