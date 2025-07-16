<template>
    <aside>
        <h2 class="text-2xl">SideBar</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <Button @click="toggleDarkMode">Bonjour</Button>
    </aside>
</template>

<script setup>
import { inject } from 'vue';
import Button from './Button.vue';

const {toggleDarkMode} = inject('darkMode')



</script>

