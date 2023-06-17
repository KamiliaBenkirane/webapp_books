<template>
  <Sidebar/>
  <div class="container">
    <div v-for="livre in livres" :key="livre.id" class="livre-item">
      <img :src="livre.image" alt="image_livre">
      <h4>{{ livre.titre }}</h4>
      <p>Stock actuel : {{livre.stock}}</p>
      <p><u>Ajouter ou supprimer stock :</u></p>
      <div class="stock">

        <button @click="decrementQuantite(livre)">-</button> <h3>{{ livre.quantite }}</h3> <button @click="livre.quantite+=1">+</button>
        <button @click="modifierStock(livre)">Appliquer</button>
      </div>
      <button @click="supprimerLivre(livre)">Supprimer le livre</button>

    </div>
  </div>


</template>

<script>
import axios from 'axios'
import Sidebar from "@/components/Admin/Sidebar";
import {useSessionStore} from "@/stores/session";

export default {
  name: "GererLivres",
  components: {Sidebar},
  setup () {
    const store = useSessionStore()
    return{store}
  },
  data(){
    return{
    id_user : this.store.getId,
      livres : [],
      compteur : 0
  }},
  created(){
    this.getBooks()
  },
  methods : {
    getBooks(){
      axios.get("http://localhost:3000/getBook").then(response =>{
        console.log(response)
        this.livres = response.data;
      } )
    },
    supprimerLivre(livre){
      let id_livre = {
        id : livre.id
      }
      axios.post("http://localhost:3000/deleteBook", id_livre).then(response=>{
        if(response.status === 200){
          this.$router.go()
          alert("Livre supprimé avec succès !")
        }
      })
    },
    decrementQuantite(livre){
      if(livre.stock>(-livre.quantite)){
        livre.quantite-=1
      }
    },
    modifierStock(livre){
      let livreStock = {
        id_book : livre.id,
        nbStock : livre.quantite
      }
      axios.post("http://localhost:3000/updateStock", livreStock).then(response=>{
        if(response.status === 200){
          livre.quantite =0
          alert("Stock mis à jour avec succès !")
          this.$router.go()

        }
      })
    },

  }
}
</script>


<style scoped>

.container{
  margin-left : 150px;
  width: 80vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap : 40px;
}
img{
  align-self: center;
  width: auto;
  height: 200px;
}
h4{
  line-height: 15px;
}
.livre-item{
  width : 200px;
  display: flex;
  flex-direction: column;
  gap : 2px;
  padding : 20px;
  background-color: #cccccc;
  border-radius: 10px;
}

p{
  line-height: 10px;
}

.stock {
  display: flex;
  flex-direction: row;
  width: 100%;
  gap : 20px;
}


</style>