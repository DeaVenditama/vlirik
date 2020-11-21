import { reactive, toRefs } from 'vue'

const state = reactive({
    error : null,
    songs : null,
    loading : false,
    page : null,
});

export default function useSongs(){

    const load = async(page=1) =>{
        let url = "http://localhost/vuelirik/be/public/lagu/getalllagu/"+page;
        try{
            const songsResponse = await fetch(url);
            state.songs = await songsResponse.json();
            state.page = page;
        }
        catch(e){
            state.error = e;
        }
    }

    const nextPage = () =>{
        state.page++;
        changePage();
    }

    const prevPage = () =>{
        state.page--;
        changePage();
    }

    const changePage = () =>{
        load(state.page);
    }

    return { ...toRefs(state), load,  nextPage, prevPage}

}