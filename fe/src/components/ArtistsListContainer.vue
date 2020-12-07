<template>
    <div>
        <table class="table-auto mx-auto mt-5">
            <thead>
                <tr>
                    <th class="px-4 py-2">Penyanyi</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(artist,index) in artists.artists" :key="index">
                    <td class="border px-4 py-2">
                        <router-link 
                            class="no-underline hover:underline text-blue-500 text-lg" 
                            :to="{ name:'Lagu', params:{artist:artist.penyanyi}}">
                            {{ artist.penyanyi }}
                        </router-link> 
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="text-center py-4">
            <span v-if="artists.page !=1">
                <a @click="prevPage" href="#" class="no-underline hover:underline text-blue-500 text-lg">
                    Sebelumnya
                </a>
            </span>
            page {{ artists.page }} dari {{ artists.pageCount }}
            <span v-if="artists.page != artists.pageCount">
                <a @click="nextPage" href="#" class="no-underline hover:underline text-blue-500 text-lg">
                    Berikutnya
                </a>
            </span>
        </div>
    </div>
</template>
<script>
import useArtists from "@/modules/artists"

export default {
    async setup(){
        const { error, load, artists, nextPage, prevPage } = useArtists();

        await load();

        return { load, error, artists, nextPage, prevPage }
    }    
}
</script>