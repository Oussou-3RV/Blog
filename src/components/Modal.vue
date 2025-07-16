<template>
    <dialog ref="dialog">
        <article>
            <button aria-label="Fermer" id="fermer" rel="prev" @click="emits('close')"></button>
            <header>
                <h2>{{ title }}</h2>
            </header>
            <slot></slot>
        </article>
    </dialog>
</template>

<script setup>
import { onMounted, ref } from 'vue';


const props = defineProps({
    title:String
})
const dialog = ref()
onMounted(() => dialog.value.show())
const emits = defineEmits('close')
</script>
<style>
article{
    padding: 1.1rem;
}
article #fermer{
    padding: 1rem;
    
}
</style>