import Vue from "vue";
import VueRouter from "vue-router"
import Home from "./components/home.vue"
import About from "./components/about.vue"

Vue.use(VueRouter)

const routes = [
    {path: '/',component: Home,name: 'index'},
    {path: '/about',component: About,name: 'about'},
    // {path: '/detail/:id',component: DetailId}
]

const router = new VueRouter({
    routes: routes
})

export default router
