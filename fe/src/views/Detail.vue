<template>
    <div>
        <h1 class="mt-4 mb-2">{{ state.songs.judul}}</h1>
        {{ state.songs.lirik }}
    </div>
</template>
<script>
import {reactive} from 'vue'


export default {
    props:[
        "id"
    ],
    setup(props)
    {
        const state=reactive({
            songs:[null],
        })
        
        const loadSongs = async() =>{
            let url = "http://localhost/vuelirik/be/public/lagu/getlagubyid/"+props.id;
            try{
                const songsResponse = await fetch(url);
                state.songs = await songsResponse.json();
            }
            catch(e){
                console.log(e);
            }
        }
        
        loadSongs();

        return {
            state
        } 
    }
}
</script>