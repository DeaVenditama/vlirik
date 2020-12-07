<template>
    <div>
        <table class="table-auto mx-auto mt-5">
            <thead>
                <tr>
                    <th class="px-4 py-2">Judul</th>
                    <th class="px-4 py-2">Penyanyi</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(song,index) in songs.songs" :key="index">
                    <td class="border px-4 py-2">
                        <router-link 
                            class="no-underline hover:underline text-blue-500 text-lg" 
                            :to="{ name:'Detail', params:{id:song.id}}">
                            {{ song.judul }}
                        </router-link> 
                    </td>
                    <td class="border px-4 py-2">
                        <router-link 
                            class="no-underline hover:underline text-blue-500 text-lg" 
                            :to="{ name:'Lagu', params:{artist:song.penyanyi}}">
                            {{ song.penyanyi }}
                        </router-link> 
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="text-center py-4">
            <span v-if="songs.page !=1">
                <a @click="prevPage" href="#" class="no-underline hover:underline text-blue-500 text-lg">
                    Sebelumnya
                </a>
            </span>
            page {{ songs.page }} dari {{ songs.pageCount }}
            <span v-if="songs.page != songs.pageCount">
                <a @click="nextPage" href="#" class="no-underline hover:underline text-blue-500 text-lg">
                    Berikutnya
                </a>
            </span>
        </div>
    </div>
</template>
<script>
import useSongs from "@/modules/songs"

export default {
    props:[
        "artist"
    ],
    async setup(props){
        const { error, load, songs, nextPage, prevPage, loadByArtist } = useSongs();

        if(props.artist=="all")
        {
            await load();
        }else{
            await loadByArtist(props.artist);
        }
        return { load, error, songs, nextPage, prevPage }
    }    
}
</script>