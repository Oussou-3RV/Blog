<template>
    <h1>single page</h1>
    <div :aria-busy="state === 'loading'">
        <article v-if="post">
            <h1>{{ post.title }}</h1>
            <img :src="thumbnail" alt="">
            <p>{{ post.body }}</p>
            <p>
                <button class="secondary" @click="onEdit">Editer</button>
            </p>
            <PostForm 
                :post="formData" 
                v-if="formData"
                @close="formData=null"
                @save="onSave"/>
        </article>
        
    </div>
</template>

<script setup>
import PostForm from '@/components/PostForm.vue';
import { useFetch } from '@/Composables/useFetch';
import { computed, ref, toRaw } from 'vue';

const props = defineProps({
    id:String
})

const formData = ref(null) //sera utilisé pour cloner l'object que l'on veut modifier

const {state, data:post} = useFetch(computed(() => `https://jsonplaceholder.typicode.com/posts/${props.id}`))
const thumbnail = computed(() => `https://picsum.photos/id/${post.value.id}/800/600`)

const onEdit = () =>{
    formData.value = structuredClone(toRaw(post.value)) //permet de cloner l'objet et toRaw evite que vuejs en fasse un proxi
}

const onSave = (newPost) => {
   formData.value = null,
   post.value = newPost
}
</script>