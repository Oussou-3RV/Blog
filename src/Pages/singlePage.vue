<template>
    <h1>single page</h1>
    <div :aria-busy="state === 'loading'">
        <article v-if="post">
            <h1>{{ post.title }}</h1>
            <img :src="thumbnail" alt="">
            <p>{{ post.body }}</p>
            <button class="secondary">Editer</button>
        </article>
        
    </div>
</template>

<script setup>
import { useFetch } from '@/Composables/useFetch';
import { computed } from 'vue';

const props = defineProps({
    id:String
})

const {state, data:post} = useFetch(computed(()=> `https://jsonplaceholder.typicode.com/posts/${props.id}`))
const thumbnail = computed(() => `https://picsum.photos/id/${post.value.id}/800/600`)

</script>