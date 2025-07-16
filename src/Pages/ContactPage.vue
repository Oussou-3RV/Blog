<template>
    <h1>Page de pratique</h1>
    <main class="layout m-4">
        <article >
            <h1 class="text-3xl pb-4">Article</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati impedit velit praesentium itaque,
                placeat repellat quibusdam quas repellendus aspernatur eveniet veniam similique voluptatum iusto,
                consequuntur reiciendis officiis minus, adipisci cumque.</p>
            <Button>Boutton</Button>
        </article>
        <aside class="sidebar">
            <DarkMode>
                <Sidebar />
            </DarkMode>
        </aside>
    </main>
</template>

<script setup>
import Sidebar from '@/components/Sidebar.vue';
import Button from '../components/Button.vue';
import { provide } from 'vue';
import DarkMode from '@/components/darkMode.vue';

provide('darkMode',false)
</script>

<style>
.layout{
    display: grid;
    grid-template-columns: 1fr 200px;
}

.sidebar{
    background-color: #000;
    color: #fff;
    padding: 1rem;
}
</style>