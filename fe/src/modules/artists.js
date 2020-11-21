import { reactive, toRefs } from 'vue'

const state = reactive({
    error : null,
    artists : null,
    loading : false,
    page : null,
});

export default function useArtists(){

    const load = async(page=1) =>{
        let url = "http://localhost/vuelirik/be/public/lagu/getallartist/"+page;
        try{
            const artistsResponse = await fetch(url);
            state.artists = await artistsResponse.json();
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

    return { ...toRefs(state), load, nextPage, prevPage }

}