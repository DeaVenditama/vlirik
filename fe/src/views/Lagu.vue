<template>
    <Suspense>
        <template #default>
            <SongsListContainer :artist="artist" :key="artist"/>
        </template>
        <template #fallback>
            <Loading />
        </template>
    </Suspense>
</template>
<script>
import SongsListContainer from "@/components/SongsListContainer.vue"
import Loading from "@/components/Loading.vue"

export default {
    props: [
        "artist"
    ],
    components:{
        SongsListContainer,
        Loading
    }
}
</script>