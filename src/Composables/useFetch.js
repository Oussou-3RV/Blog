import { ref, watch } from "vue";

export function useFetch(url){

    const data = ref(null)
    const state = ref('loading')

    watch(url,(urlValue) => {
        fetch(urlValue)
        .then(r =>{
            if(r.ok){
                return r.json()
            }
        })
        .then(v => {
            data.value = v;
            state.value = 'idle'
        }).catch(e => {
            state.value = 'error'
            throw new Error("Impossible de charger les articles depuis le serveur !");
        })
    },{immediate:true})

    return {
        data,
        state,
    }
}