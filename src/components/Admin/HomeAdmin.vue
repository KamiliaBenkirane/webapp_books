<template>
  <div class="container">
    <Sidebar/>

    <div class="content">
      <div class="box_container">
        <div class="box">
          <p>Ajouter un livre</p>
          <img class="icone_admin" src="../../assets/images/livre-ouvert.png" alt="livre">
        </div>
        <div class="box">
          <p>Supprimer un livre</p>
          <img class="icone_admin" src="../../assets/images/supprimer.png" alt="livre">
        </div><div class="box">
          <p>Gérer les stocks</p>
          <img class="icone_admin" src="../../assets/images/en-stock.png" alt="livre">
        </div>
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
  height : 180px;
  width : 180px;
  display: flex;
  padding-bottom : 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ececea;
  border-radius : 10px;
}

.box:hover{
  cursor: pointer;
  background-color: #e5e4e2;
}



</style>