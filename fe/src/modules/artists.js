import { reactive, toRefs } from 'vue'

const state = reactive({
    error : null,
    artists : null,
    loading : false,
    page : null,
    isAbjad : false,
    abjad : null,
});

export default function useArtists(){

    const load = async(page=1) =>{
        let url = "http://localhost/vuelirik/be/public/lagu/getallartist/"+page;
        state.isAbjad = false;
        try{
            const artistsResponse = await fetch(url);
            state.artists = await artistsResponse.json();
            state.page = page;
        }
        catch(e){
            state.error = e;
        }
    }

    const loadArtistByAbjad = async(abjad="a", page=1)=>{
        let url = "http://localhost/vuelirik/be/public/lagu/getartistsbyabjad/"+abjad+"/"+page;
        state.isAbjad = true;
        try{
            const artistsResponse = await fetch(url);
            state.artists = await artistsResponse.json();
            state.page = page;
            state.abjad = abjad;
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
        if(state.isAbjad)
        {
            loadArtistByAbjad(state.abjad, state.page);
        }else{
            load(state.page);
        }
    }

    return { ...toRefs(state), load, nextPage, prevPage, loadArtistByAbjad }

}