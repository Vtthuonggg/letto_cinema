import Router from "vue-router";
import Vue from "vue";
import Home from "@/components/Home.vue";
import LoginPage from "@/components/Login.vue";
import RegisterPage from "@/components/Register.vue";
import FavoriteFilm from "@/components/Favorite_film.vue";
import InforTicket from "@/components/Infor_ticket.vue";
import TicketPage from "@/components/Ticket.vue";
Vue.use(Router);

const routes =
    [
        {
            path: "/",
            redirect: () => {
                "/login";
            },
        },
        {
            path: "/home-page",
            name: "Home",
            component: Home
        },
        {
            path: "/login",
            name: "Login",
            component: LoginPage
        },
        {
            path: "/register",
            name: "Register",
            component: RegisterPage
        },
        {
            path: "/favorite-film",
            name: "FavoriteFilm",
            component: FavoriteFilm
        },
        {
            path: "/infor-tiket",
            name: "InforTicket",
            component: InforTicket
        },
        {
            path: "/ticket",
            name: "Ticket",
            component: TicketPage
        },


    ];




const router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});
export default router;