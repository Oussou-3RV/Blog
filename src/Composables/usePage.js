import { onMounted, onUnmounted, ref } from "vue";

export function usePage() {
    const page = ref(parseHash())
    
    let removeListener

    onMounted(()=>{
        //permet de changer la valeur de page
        const listener = () => {
            page.value = parseHash()
        }

        //lorsque le # change appelle listener()
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
    };
}

function parseHash(){
    return window.location.hash.replace("#","");
}