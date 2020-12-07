import { createWebHistory, createRouter } from "vue-router"
import Lagu from "@/views/Lagu.vue"
import Artist from "@/views/Artist.vue"
import Detail from "@/views/Detail.vue"

const routes = [
    {
        path : "/:artist",
        name : "Lagu",
        component: Lagu,
        props: true
    },
    {
        path : "/artist",
        name : "Artist",
        component: Artist
    },
    {
        path: "/detail/:id",
        name: "Detail",
        component: Detail,
        props: true,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;