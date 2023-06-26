<template>
  <header>
    <nav class="nav-items">
      <div class="logo">
        <a href="#">
        <span>M</span>ar<span>L</span>ia
        </a>
      </div>

      <ol>
        <router-link to="/home">Accueil</router-link>
      </ol>

      <ul class="nav-list">

        <li>
          <router-link to="/panier">
            <button class="flex_icone_panier">
              <img src="../../assets/sac-de-courses.png" alt="icone panier">
            </button>
          </router-link>
        </li>
        <li>
          <router-link to="/mesCommandes">
            <button>Mes commandes</button>
          </router-link>
        </li>
        <li><router-link to="/">
          <button @click="logout">Se déconnecter</button>
        </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import {useSessionStore} from "@/stores/session";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Navbar",
  setup () {
    const store = useSessionStore()
    return{store}
  },
  methods : {
    logout(){
      this.store.$reset()
    }
  },

}
</script>

<style scoped>

.nav-items {
  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('https://wallpapercave.com/wp/wp5991978.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.nav-items > .logo{
  margin-left: 20px;
}

.logo {
  color: #3F89A7;
  font-size: 2em;
  text-decoration: none;
  font-weight: 700;
  font-family: 'script', cursive;
  display: flex;
  align-items: center;
}

.logo a{
  color: #3F89A7;
  text-decoration: none;
}

.logo span{
  color: white;
}

header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 100%;
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .2);
  background-color: #162142;
  font-weight: 390;
  text-transform: none;
  font-size: 0.9rem;
}

header a {
  text-decoration: none;
  color: white;
  align-self : flex-start
}

header a:hover{
  color: #3F89A7;
  text-underline: white;
}

header  img{
  height : 20px;
  width : auto;
}
nav ol{
  font-size: 16px;
  margin-left: 50px;
  margin-top: 20px;
}
nav ul{
  list-style-type: none;
  display: flex;
  align-items: center;
  height: inherit;
}
.nav-list {
  margin-right: 200px;
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  gap: 20px;
}


button{
  border-color : white;
  padding : 7px;
  background-color: white;
  border-radius: 5px;
  cursor: pointer;
}

button:hover{
  background-color: white;
}

li input{
  padding : 7px;
  border: 2px solid white;
  border-radius : 10px;
  margin-right: auto;
}



</style>