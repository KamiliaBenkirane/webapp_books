import {createRouter, createWebHistory} from 'vue-router'
import Home from '../components/User/Home.vue';
import Panier from '../components/User/Panier.vue';
import Favoris from '../components/User/Favoris.vue';
import Commandes from '../components/User/Commandes.vue';
import Register from '../components/Register.vue';
import Login from '../components/Login.vue';
import HomeAdmin from '../components/Admin/HomeAdmin';


const routes = [
    {path: '/home', component: Home},
    {path: '/panier', component: Panier},
    {path: '/favoris', component: Favoris},
    {path: '/mesCommandes', component: Commandes},
    {path: '/', component: Login},
    {path: '/register', component: Register},
    {path: '/homeAdmin', component: HomeAdmin},
]


const router = new createRouter({
    history: createWebHistory(),
    routes

})

export default router