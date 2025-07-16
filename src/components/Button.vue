<template>
    <button :class="classes">
        <slot></slot>
    </button>
</template>

<script setup>
import { computed, inject, unref } from 'vue';

const {darkMode} = inject('darkMode')


const props = defineProps({
    dark: Boolean
})

const classes = computed(() => ({
    btn: true,
    dark: props.dark || unref(darkMode),
}))
</script>

<style>
.btn {
    color: #FFF;
    background-color: #000;
    border: 1px solid #dddddd;
    padding: .5rem 1rem;
    font: inherit;
}

.btn.dark {
    color: #000;
    background-color: #fff;
}

</style>
