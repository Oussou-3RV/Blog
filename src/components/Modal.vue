<template>
    <dialog open>
        <article>
            <button aria-label="Fermer" rel="prev" @click="emits('close')"></button>
            <header>
                <h2>{{ title }}</h2>
            </header>
            <slot></slot>
        </article>
    </dialog>
</template>

<script setup>
const props = defineProps({
    title:String
})

const emits = defineEmits(['close'])
</script>