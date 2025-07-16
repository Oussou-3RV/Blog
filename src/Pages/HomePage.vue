<template>
    <h1 class="text-3xl mb-4">HomePage</h1>

    <button class="p-2" @click="spoiller = !spoiller">Afficher / Masquer</button>

    <transition class="mt-3" mode="out-in" appear>
        <p v-if="spoiller" class="border p-2 mt-3">A la fin de la serie sully meurt</p>
    </transition>

    <form class="mt-3" @submit.prevent="addMovie">
        <fieldset role="group">
            <input type="text" v-model="movieName">
            <button class="p-3 primary">add</button>
        </fieldset>
    </form>


    <ul>
        <transition-group name="list">
            <li v-for="movie in movies" :key="movie">{{ movie }}
                <button class="border bg-red-500 p-1 px-4" @click="deleteM(movie)">X</button>
            </li>
        </transition-group>
    </ul>


    <div>
        <input type="checkbox" v-model="showCompteur">
        <label for="">Afficher Compteur</label>
    </div>
    <keep-alive>
        <component :is="componentToShow" />
    </keep-alive>
</template>

<script setup>
import Compteur from '@/components/Compteur.vue';
import PlaceHolder from '@/components/placeHolder.vue';
import { computed, ref } from 'vue';


const spoiller = ref(false)
const movieName = ref('')

const movies = ref([
    'sullu',
    'dushane',
    'jack',
    'kit',
    'jemmy'
])
const addMovie = () => {
    movies.value = [movieName.value, ...movies.value]
    movieName.value = ''
    console.log(movies.value)
}
const deleteM = (movie) => {
    movies.value = movies.value.filter(m => m != movie)
}

const showCompteur = ref(false)

const componentToShow = computed(() => {
    if (showCompteur.value)
        return Compteur
    else
        return PlaceHolder
})
</script>

<style>
.list-enter-from {
    opacity: 0;
    transform: translateX(10px);
}

.list-leave-to {
    opacity: 0;
    transform: translateX(-10px);

}

.list-enter-active,
.list-leave-active {
    transition: all .5s ease;
}
</style>