<template>
  <div class="container">
    <Sidebar/>

    <div class="content">
      <div class="box_container">
        <router-link to="/ajouterLivre">
        <div class="box">
          <p>Ajouter un livre</p>
          <img class="icone_admin" src="../../assets/images/livre-ouvert.png" alt="livre">
        </div>
        </router-link>


          <router-link to="/gererLivres">
          <div class="box">
          <p>Gérer les livres</p>
          <img class="icone_admin" src="../../assets/images/en-stock.png" alt="livre">
        </div>
          </router-link>


          <router-link to="/suivreCommandes">
            <div class="box">
              <p>Suivre les commandes</p>
              <img class="icone_admin" src="../../assets/images/livraison-rapide.png" alt="livre">
            </div>
          </router-link>

    </div>
  </div>
  </div>
</template>



<script>
import {useSessionStore} from "@/stores/session";
import Sidebar from "@/components/Admin/Sidebar";

export default {
  name: "HomeAdmin",
  components: {Sidebar},
  component : {
    Sidebar
  },
  setup () {
    const store = useSessionStore()
    return{store}
  },
  data() {
    return {
      /*
      nom : this.store.getNom(),
      prenom : this.store.getPrenom(),
      mail : this.store.getMail(),*/
    }
  },

  methods : {
    logout(){
      this.store.$reset()
    }
  }
}

</script>

<style scoped>


.content {
  background-color: #3F89A7;
  height : 100vh;
  width: 100vw;
  padding: 20px;
  display : flex;
  justify-content: center;
  align-items: center;
}

.icone_admin{
  height: 100px;
  width: 100px;
}

.box_container{
  display: flex;
  gap : 20px;
  flex-wrap: wrap;

}

.box{
  height : 200px;
  width : 200px;
  display: flex;
  padding-bottom : 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('https://wallpapercave.com/wp/wp5991978.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius : 10px;
}

.box:hover{
  cursor: pointer;
  background-color: #e5e4e2;
}

a{
  text-decoration: none;
  color : white;
}


</style>