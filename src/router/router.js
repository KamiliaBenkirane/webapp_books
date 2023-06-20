import {createRouter, createWebHistory} from 'vue-router'
import Home from '../components/User/Home.vue';
import Panier from '../components/User/Panier.vue';
import Favoris from '../components/User/Favoris.vue';
import Commandes from '../components/User/Commandes.vue';
import Register from '../components/Register.vue';
import Login from '../components/Login.vue';
import HomeAdmin from '../components/Admin/HomeAdmin';
import AjouterLivre from '../components/Admin/AjouterLivre';
import GererLivres from '../components/Admin/GererLivres';
import SuivreCommandes from '../components/Admin/SuivreCommandes';
import Statistiques from '../components/Admin/Statistiques';
import UserStats from '../components/Admin/UserStats';
import LivreStats from '../components/Admin/LivreStats';


const routes = [
    {path: '/home', component: Home},
    {path: '/panier', component: Panier},
    {path: '/favoris', component: Favoris},
    {path: '/mesCommandes', component: Commandes},
    {path: '/', component: Login},
    {path: '/register', component: Register},
    {path: '/homeAdmin', component: HomeAdmin},
    {path: '/ajouterLivre', component: AjouterLivre},
    {path: '/gererLivres', component: GererLivres},
    {path: '/suivreCommandes', component: SuivreCommandes},
    {path: '/stats', component: Statistiques},
    {path: '/userStats', component: UserStats},
    {path: '/livreStats', component: LivreStats},
]


const router = new createRouter({
    history: createWebHistory(),
    routes

})

export default router