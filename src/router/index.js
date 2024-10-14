import Router from "vue-router";
import Vue from "vue";
import Home from "@/components/Home.vue";
Vue.use(Router);

const routes = [{
    path: "/",
    name: "Home",
    component: Home
},];



const router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});
export default router;