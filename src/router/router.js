import {createRouter, createWebHistory} from 'vue-router'
import Home from '../components/Home.vue';
import Panier from '../components/Panier.vue';
import Favoris from '../components/Favoris.vue'


const routes = [
    {path: '/home', component: Home},
    {path: '/panier', component: Panier},
    {path: '/favoris', component: Favoris},
]


const router = new createRouter({
    history: createWebHistory(),
    routes

})

export default router