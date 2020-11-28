<template>
    <div class="text-center">
        <span v-for="(a, index) in arrayAlphabet" :key="index">
            <a @click="changeAbjad(a)" class="p-1 no-underline hover:underline text-blue-500 text-lg">{{ a }}</a>
        </span>
    </div>
</template>
<script>
import useSongs from "@/modules/songs";
import useArtist from "@/modules/artists";
import { watch, ref } from "vue";
import { useRoute } from "vue-router";

export default {
    setup(){
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const arrayAlphabet = alphabet.split("");

        const { loadLaguByAbjad } = useSongs();
        const { loadArtistByAbjad } = useArtist();

        const route = useRoute();

        const current = ref('lagu');

        watch(()=>route.path,
            newPath => {
                if(newPath=="/")
                {
                    current.value = 'lagu';
                }else{
                    current.value = 'artists';
                }
            }
        );

        function changeAbjad(a)
        {
            if(current.value=="lagu")
            {
                loadLaguByAbjad(a);
            }else{
                loadArtistByAbjad(a);
            }
        }

        return{
            arrayAlphabet,
            changeAbjad
        }
    }
}
</script>
<style scoped>
    a{
        cursor: pointer
    }
</style>