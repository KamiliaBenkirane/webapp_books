<template>
  <Navbar/>
  <div class="page">
  <div class="container">
  <div v-for="element in panier" :key="element.id" v-show="element.quantite>0" class="panier-item">

      <img :src="element.image" alt="image_element" class="image_livre">
    <div class="info">
      <p>Titre : {{element.titre}}</p>
      <p>Auteur : {{element.auteur}}</p>
      <p>Prix unitaire : {{element.prix}}€</p>

    </div>


    <div class="quantite">
      <button class="changer" @click="decrementQuantite(element)">-</button><p>{{element.quantite}}</p><button class="changer" @click="incrementQuantite(element)">+</button>

    </div>
    <p>{{(element.prix*element.quantite).toFixed(2)}}€</p>

  </div>
    <div v-if="getTotalPanier()!==0">
      <h3 style="text-align: center"> Total : {{ getTotalPanier().toFixed(2) }}€</h3>
      <button v-show="panier !== 0" @click="passerCommande()"> Passer ma commande !</button>
    </div>
    <div v-else>
      <h1>Votre panier est actuellement vide :(</h1>
    </div>
  </div>
  </div>
</template>




<script>
import Navbar from "@/components/User/Navbar";
import Footer from "@/components/User/Footer";
import axios from 'axios'
import {useSessionStore} from "@/stores/session";

export default {
  name: "Panier",
  components : {
    Navbar,
    Footer
  },

  setup () {
    const store = useSessionStore()
    return{store}
  },
  data(){
    return {
      panier : [],
      id : this.store.getId(),
      totalPanier : 0
    }
  },
  created(){
    this.getPanier()
  },
  methods : {

    getPanier(){
      const userId = {
        id : this.id
      }
      axios.post("http://localhost:3000/panier", userId).then(response =>{
        console.log(response.data)
        this.panier = response.data
      })
    },

    getTotalPanier(){
      let totalPanier = 0
      for (var i = 0; i < this.panier.length; i++){
        totalPanier+=(this.panier[i].quantite*this.panier[i].prix)
      }
      this.store.user.totalPanier = totalPanier
      return totalPanier
    },
    

    decrementElement(element){
      if(element.quantite>0){
        element.quantite-=1
      }
    },

    incrementQuantite(element){
      element.quantite+=1
      let infoBook = {
        id_user : element.id_user,
        id_livre: element.id_livre
      }
      axios.post("http://localhost:3000/incrementQuantite", infoBook).then(response =>{
        if (response.status === 400){
          alert("echec de la requete")
        }
      })
    },

    decrementQuantite(element){
      if(element.quantite>0){
        element.quantite-=1
      }

      let infoBook = {
        id_user : element.id_user,
        id_livre: element.id_livre
      }
      axios.post("http://localhost:3000/decrementQuantite", infoBook).then(response =>{
        if (response.status === 400){
          alert("echec de la requete")
        }
      })
    },

    passerCommande(){
      let id_user = {
        id : this.store.getId()
      }
      axios.post("http://localhost:3000/passerCommande", id_user).then(response=>{
        if(response.status===400){
          alert("Nous n'avons pas pu passer votre commande, veuillez réessayer plus tard")
        }
        else{
          alert("Commande passée, vos livres seront bientôt chez vous :)")
          this.$router.push("/home")
        }
      })
    }

  }
}
</script>

<style scoped>

.page{
  height : 100vh;
  width : 100vw;
  margin : 0;
  display: flex;
}

.container{
  width : 100vw;
  margin : 80px;
  display : flex;
  flex-direction : column;
  gap : 10px;
  align-items: center;
}

img{
  height : 150px;
  width : auto;
  text-align: left;
  border-radius : 5px;
}



.panier-item{
  height : 150px;
  width : 80vw;
  background-color: #cacaca;
  border-radius: 10px;
  padding : 20px;
  display : flex;
  align-items: center;
}


h2{
  font-size : 15px;
}
.info{
  display: flex;
  flex-direction: column;
  justify-content: left;
  padding : 0 10px;
}

p {
  line-height: 10px;
}

.quantite{
  display : flex;
  background-color: #f1f1f1;
  border-radius : 5px;
  padding : 20px;
  font-size : 18px;
  gap : 10px;
  border : 1px solid black;
  margin-left : auto;
  margin-right : 20px;
  align-items: center;
}

button{
  background-color: darkslategrey;
  padding : 30px;
  width : 300px;
  border-radius : 10px;
  color : white;
  font-size : 18px;
  font-weight : 400;
}

button:hover {
  cursor: pointer;
  background-color: black;

}

.changer:hover{
  background-color : #CEC4D8;
  cursor: pointer;
}

.changer{
  width: 25px;
  height: 25px;
  border-radius: 5px;
  padding : 0;
  background-color: whitesmoke;
  color : black;
  border : none;
}

</style>