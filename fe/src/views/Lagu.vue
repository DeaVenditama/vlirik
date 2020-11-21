<template>
    <Suspense>
        <template #default>
            <SongsListContainer />
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
    components:{
        SongsListContainer,
        Loading
    }
}
</script>