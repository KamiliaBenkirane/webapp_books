<template>
  <header>
    <nav>
      <ul>
        <li><router-link to="/home">Home</router-link></li>
        <li><input type="text" placeholder="Search.."></li>
        <li><router-link to="/favoris"><button><img src="../../assets/favori.png" alt="icone favori"></button></router-link></li>
        <li><router-link to="/panier"><button class="flex_icone_panier"><img src="../../assets/sac-de-courses.png" alt="icone panier"></button></router-link></li>
        <li><router-link to="/mesCommandes"><button>Mes commandes</button></router-link></li>
        <li><router-link to="/"><button @click="logout">Se déconnecter</button></router-link></li>

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
  background-color: white;
  font-weight: 390;
  text-transform: none;
  font-size: 0.9rem;
}

header a {
  text-decoration: none;
  color: #2c3e50;
  align-self : flex-start
}

header a:hover{
  color : black;
  text-underline: black;
}

header  img{
  height : 20px;
  width : auto;
}

nav ul{
  list-style-type: none;
  display: flex;
  align-items: center;
  height: inherit;
  gap : 20px;
}

button{
  border : none;
  padding : 7px;
  background-color: white;
  border-radius: 5px;
  cursor: pointer;
}

button:hover{
  background-color: lightgray;
}

li input{
  padding : 7px;
  border: 2px solid lightgray;
  border-radius : 10px;
}



</style>