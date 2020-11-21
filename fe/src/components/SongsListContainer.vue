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
                    <td class="border px-4 py-2">{{ song.judul }}</td>
                    <td class="border px-4 py-2">{{ song.penyanyi }}</td>
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
    async setup(){
        const { error, load, songs, nextPage, prevPage } = useSongs();

        await load();

        return { load, error, songs, nextPage, prevPage }
    }    
}
</script>