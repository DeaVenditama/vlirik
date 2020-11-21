import { createWebHistory, createRouter } from "vue-router"
import Lagu from "@/views/Lagu.vue"
import Artist from "@/views/Artist.vue"

const routes = [
    {
        path : "/",
        name : "Lagu",
        component: Lagu
    },
    {
        path : "/artist",
        name : "Artist",
        component: Artist
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;