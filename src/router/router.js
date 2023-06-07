import {createRouter, createWebHistory} from 'vue-router'
import Home from '../components/Home.vue';
import Panier from '../components/Panier.vue';
import Favoris from '../components/Favoris.vue';
import Register from '../components/Register.vue';
import Login from '../components/Login.vue';


const routes = [
    {path: '/home', component: Home},
    {path: '/panier', component: Panier},
    {path: '/favoris', component: Favoris},
    {path: '/', component: Login},
    {path: '/register', component: Register},
]


const router = new createRouter({
    history: createWebHistory(),
    routes

})

export default router