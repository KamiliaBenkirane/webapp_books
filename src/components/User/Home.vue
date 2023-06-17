<template>
  <div>
    <Navbar/>
    <div class="background-image"></div>
    <div class="content">
      <h1 class="title">MarLia.Bibliothèque</h1>
      <p class="description">Découvrez les dernières actualités et les meilleurs livres du moment.</p>
      <div class="livres-list">
        <div v-for="livre in livres" :key="livre.id" class="livre-item">
          <img class="image_livre" :src="livre.image" alt="wallpaperbetter1">
          <h4 class="livre-title">{{ livre.titre }}</h4>
          <h5 class="livre-auteur"><u>Auteur(e)</u> : {{ truncateText(livre.auteur, 50) }}</h5>
          <h5 class="livre-genres"><u>Genres</u> : {{ parseArrayString(livre.genres) }}</h5>
          <h5 class="livre-edition"><u>Maison d'édition</u> : {{ truncateText(livre.edition, 50) }}</h5>
          <p class="livre-description"><u>Résumé</u> : {{ truncateText(livre.resume, 150) }}
            <span v-if="livre.resume.length > 150" class="read-more" @click="showFullDescription(livre)">
              Lire la suite
            </span>
          </p>
          <h5 class="livre-note">Note : {{livre.note}}/5</h5>
          <h5 class="livre_prix">Prix : {{livre.prix}}€ </h5>
          <div v-if="livre.stock>0">
            <button v-if="livre.quantite>0" class="addToCart" @click="addToCart(livre)">Ajouter au panier</button>
            <button v-else class="addToCartDisabled" @click="addToCart(livre)" disabled>Ajouter au panier</button>
            <button @click="decrement(livre)">-</button> {{ livre.quantite }} <button @click="increment(livre)">+</button>
            <p v-show="livre.quantite === livre.stock">Limite du stock !</p>
          </div>
          <div v-else>
            <h3 class="stock-vide">Plus en stock :(</h3>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>



<script>
import axios from 'axios'
import Navbar from "@/components/User/Navbar";
import Footer from "@/components/User/Footer";
import {useSessionStore} from "@/stores/session";


export default {
  name: "Home",
  components: {
    Navbar,
    Footer
  },
  setup () {
    const store = useSessionStore()
    return{store}
  },
  data(){
    return{
      livres : [],
      compteur : 0,
      totalPanier : this.store.user.totalPanier,
    }
  },
  created() {
    this.getBooks()
  },
  methods:{
    getBooks(){
      axios.get("http://localhost:3000/getBook").then(response =>{
        console.log(response)
        this.livres = response.data;
      } )
    },



    decrement(livre){
      if (livre.quantite>0){
        livre.quantite -= 1;
      }
    },
    increment(livre){
      if (livre.quantite<livre.stock){
        livre.quantite += 1;
      }
    },
    showFullDescription(livre){
      livre.showFullDescription = true;
    },
    truncateText(text, maxLength){
      if (text.length > maxLength) {
        return `${text.substring(0, maxLength)}...`;
      }
      return text;
    },

    addToCart(livre){
      let bookInfo = {
        id_user : this.store.getId(),
        id_livre : livre.id,
        quantite : livre.quantite
      }
      console.log(bookInfo)
      axios.post("http://localhost:3000/addLivrePanier", bookInfo).then(response =>{
        if (response.status === 200){
          alert("Panier mis à jour!")
        }
        else{
          alert("Un problème est survenu")
        }
      })
      livre.quantite = 0
      this.store.addLivre(livre)
      this.store.user.totalPanier+=(livre.prix*livre.quantite)
      console.log(this.store.user.totalPanier)
    },
    parseArrayString(str) {
      try {
        const sanitizedStr = str.replace(/["{}]/g, ''); // Remove curly braces and double quotes
        const values = sanitizedStr.split(','); // Split the string into an array of values
        return values.map(value => value.trim()).join(', '); // Trim each value and join them with commas
      } catch (error) {
        console.error('Error extracting values from the string:', error);
      }
      return '';
    }
  }
}
</script>

<style scoped>

body{
  font-family: Avenir, serif;
  font-weight: 500;
}



button{
  border : none;
  background-color: #cacaca;
  padding : 5px;
  margin : 5px;
  border-radius : 5px;
}

button:hover{
  background-color: #999999;
  cursor: pointer;

}

.addToCart{
  background-color: #a91e00;
  padding : 10px;
  font-size : 15px;
  color : white;
}

.addToCartDisabled{
  background-color: lightgray;
  padding : 10px;
  font-size : 15px;
  color : black;
}

.addToCartDisabled:hover{
  background-color: lightgray;
  cursor: not-allowed;
}

.addToCart:hover{
  background-color: #811700;
  cursor: pointer;
}

.title {
  font-size: 50px;
  font-weight: bold;
  color: white;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;

}

.description {
  font-size: 18px;
  color: white;
  text-align: center;
  margin-bottom: 30px;
}

h1 {
  margin-top: 70px;
}

/* Styles pour le conteneur principal */
.livres-list {
  width : 100vw;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;

}

.background-image{
  position: fixed;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://wallpapercave.com/wp/wp3112585.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.content{
  margin-top: 70px;
  padding: 20px 0;
}

body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}


/* Styles pour le titre */
h1 {
  font-size: 40px;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
}

/* Styles pour la description */
p {
  font-size: 18px;
  color: #666;
  text-align: center;
}


.livre-item {
  width: 300px;
  margin-right: 20px;
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #F4F7F9;
  text-align : center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.livre-item img {
  border-radius: 5px;
  width: 60%;
  height: auto;
}

.livre-item h3 {
  font-size: 18px;
  color: #333;
}

.livre-item p {
  font-size: 14px;
  color: #666;
}

.livre-title {
  font-size: 20px;
  font-weight: bold;
  color: black;
}

.livre-auteur,
.livre-genres,
.livre-edition,
.livre-note,
.livre-prix {
  font-size: 16px;
  color: black;
  text-align: justify;
  overflow: hidden;
  max-height: 3em;
  line-height: 1em;
}

.livre-description {
  font-size: 16px;
  text-align: justify;
  overflow: hidden;
  max-height: 150px;
  line-height: 1em;
}


.read-more{
  cursor: pointer;
  color: blue;
}

.livre-item .stock-vide{
  color : red;
}

</style>