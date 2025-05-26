import { ref, watch } from "vue";

export function useFetch(url){

    const data = ref(null)
    const state = ref('loading')

    watch(url,(urlValue) => {
        fetch('url')
        .then(r =>{
            if(r.ok){
                return r.json()
            }
        })
        .then(v => {
            data = v;
            state = 'idle'
        }).catch(e => {
            state = 'error'
            throw new Error("Impossible de charger les articles depuis le serveur !");
        })
    },{immediate:true})

    return {
        data,
        state,
    }
}