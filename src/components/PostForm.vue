<template>
    <Modal title="Editer l'article" >
        
        <Form @submit.prevent="onSubmit">
            <Alert type="danger" v-if="state==='error'" @close="state='idle'">Mise à jour echoué</Alert>
            <Field label="titre" id="titre" typeInput="text" v-model="post.title" />
            <Field label="Contenu" id="contenu" typeInput="textarea" v-model="post.body" />

            <button :disabled="state === 'loading'">Save</button>
        </Form>
    </Modal>
</template>

<script setup>
import { ref } from 'vue';
import Modal from './Modal.vue';
import Field from './Field.vue';
import Alert from './Alert.vue';

const props = defineProps({
    post: Object
})
const emits = defineEmits('save')
const state = ref('idle')

const onSubmit = () => {
    state.value = 'loading'
    fetch(`https://jsonplaceholder.typicode.com/posts/${props.post.id}`, {
        method: 'put',
        body: JSON.stringify(props.post),
        headers: {
            'Content-Type': 'aplication/json', //ce que j'envoie au serveur
            'Accept': 'application/json',        //ce que je reçois du serveur
        }
    }).then(res => {
        if (res.ok) {
            return res.json()
        }

        throw new Error("impossible de mettre à jour !")

    }).then(data => {
        emits('save', props.post)
        //emits('save', data) : object modifier que l'on souhaite retourner, mais, vu qu'il s'agit d'un faux serveur on va retourner manuellement l'object avec les bonnes valeurs
        
    }).catch(() => {
        state.value = 'error'
    })
}
</script>