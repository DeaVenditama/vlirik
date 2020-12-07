<template>
    <div>
        <div class="lg:container lg:mx-auto text-center mt-4">
            <img class="mx-auto h-20" src="@/assets/logo.png" />
            <h1>Vue-Lirik</h1>
            <router-link 
                class="no-underline hover:underline text-blue-500 text-lg" 
                to="/all">
                Lagu
            </router-link> 
            |
            <router-link 
                class="no-underline hover:underline text-blue-500 text-lg" 
                to="/artist">
                Artist
            </router-link> 
        </div>
        <SubMenu />
    </div>
</template>
<script>
import SubMenu from "@/components/SubMenu.vue"

export default {
    components:{
        SubMenu
    }    
}
</script>