import { reactive, toRefs } from 'vue'

const state = reactive({
    error : null,
    songs : null,
    loading : false,
    page : null,
    isAbjad : false,
    abjad : null,
});

export default function useSongs(){

    const load = async(page=1) =>{
        let url = "http://localhost/vuelirik/be/public/lagu/getalllagu/"+page;
        state.isAbjad = false;
        try{
            const songsResponse = await fetch(url);
            state.songs = await songsResponse.json();
            state.page = page;
        }
        catch(e){
            state.error = e;
        }
    }

    const loadLaguByAbjad = async(abjad="a", page=1)=>{
        let url = "http://localhost/vuelirik/be/public/lagu/getlagubyabjad/"+abjad+"/"+page;
        state.isAbjad = true;
        try{
            const songsResponse = await fetch(url);
            state.songs = await songsResponse.json();
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
            loadLaguByAbjad(state.abjad, state.page);
        }else{
            load(state.page);
        }
    }

    return { ...toRefs(state), load,  nextPage, prevPage, loadLaguByAbjad }

}