<template>
    <h1>Blog</h1>
    <div v-if="state === 'error'">
        Impossible de charger les articles depuis le serveur.
    </div>
    <div v-else :aria-busy="state === 'loading'">
        <Grid :width="300">
            <PostCard v-for="post in posts" :key="post.id" :post="post" />
        </Grid>
    </div>
    <div class="pagination">
        <button :disabled="page == 1" @click="page--">page précédente</button>
        <button @click="page++">page suivante</button>
    </div>
</template>

<script setup>
import Grid from '@/components/Grid.vue';
import PostCard from '@/components/PostCard.vue';
import { useFetch } from '@/Composables/useFetch';
import { computed, onMounted, ref, watch } from 'vue';

const page = ref(1) 

const {state, data:posts} = useFetch(computed(() => `https://jsonplaceholder.typicode.com/posts?_limit=2&_page=${page.value}`))

// watch(page, (p) => {
//     state.value = 'loading'
//     fetch("https://jsonplaceholder.typicode.com/posts?_limit=2&_page=" + p)
//         .then(r => {
//             if (r.ok) {
//                 return r.json()
//             }

//             throw new Error("Erreur lors du chargement des articles depuis le serveur !")
//         })
//         .then(data => {
//             posts.value = data
//             state.value = "idle"

//         }).catch(e => {
//             state.value = 'error'
//         })
// }, { immediate: true })
</script>

<style>
.pagination {
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>