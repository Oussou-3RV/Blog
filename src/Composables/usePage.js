import { onMounted, onUnmounted, ref } from "vue";

export function usePage() {
    const hash = parseHash()

    const page = ref(hash[0])
    const param = ref(hash[1])
    
    let removeListener

    onMounted(()=>{
        //permet de changer la valeur de : page
        const listener = () => {
            [page.value,param.value] = parseHash()
        }

        //lorsque le hash change: appelle listener()
        window.addEventListener('hashchange',listener)

        removeListener = () =>{
            window.removeEventListener('hashchange',listener)
        }
    });

    onUnmounted(()=>{
        removeListener()
    })

    return {
        page,
        param,
    };
}
//return le hash actuel sans #
function parseHash(){
    return window.location.hash.replace("#","").split(":");
}