<template>
    <Suspense>
        <template #default>
            <ArtistsListContainer />
        </template>
        <template #fallback>
            <Loading />
        </template>
    </Suspense>
</template>
<script>
import ArtistsListContainer from "@/components/ArtistsListContainer.vue"
import Loading from "@/components/Loading.vue"

export default {
    components:{
        ArtistsListContainer,
        Loading
    }
}
</script>