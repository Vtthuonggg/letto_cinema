import Router from "vue-router";
import Vue from "vue";
import LoginPage from "@/components/Login.vue";
import RegisterPage from "@/components/Register.vue";
import FavoriteFilm from "@/components/Favorite_film.vue";
import InforTicket from "@/components/Infor_ticket.vue";
import TicketPage from "@/components/Ticket.vue";
import FilmPage from "@/components/Film.vue";
import CinemaPage from "@/components/Cinema.vue";
import NowShowing from "@/components/NowShowingFilm.vue";
import UpcomingFilm from "@/components/UpcomingFilm.vue";
Vue.use(Router);

const routes = [
  {
    path: "/",
    redirect: "/login",
  },

  {
    path: "/login",
    name: "Login",
    component: LoginPage,
  },
  {
    path: "/register",
    name: "Register",
    component: RegisterPage,
  },
  {
    path: "/favorite-film",
    name: "FavoriteFilm",
    component: FavoriteFilm,
  },
  {
    path: "/infor-tiket",
    name: "InforTicket",
    component: InforTicket,
  },
  {
    path: "/ticket",
    name: "Ticket",
    component: TicketPage,
  },
  {
    path: "/film",
    name: "Film",
    component: FilmPage,
    children: [
      {
        path: "now-showing",
        name: "NowShowing",
        component: NowShowing,
      },
      {
        path: "upcoming",
        name: "UpcomingFilm",
        component: UpcomingFilm,
      },
    ],
  },
  {
    path: "/cinema",
    name: "Cinema",
    component: CinemaPage,
  },
];

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
export default router;
