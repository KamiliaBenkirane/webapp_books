<template>
  <div>
    <Navbar/>
    <div class="background-image"></div>

    <div class="search-container">
      <input type="text" v-model="searchQuery" placeholder="Rechercher un livre" @input="filterBooks" class="search-input">

      <div v-for="livre in filteredLivres" :key="livre.id" class="livre-item"></div>
    </div>

    <div class="content">
      <p class="description">Bienvenue dans notre librairie en ligne, où les livres prennent vie et les histoires s'épanouissent !
        <br>Découvrez un univers infini et captivant pour nourrir votre esprit, à portée de clic.
        <br>Achetez en toute simplicité et profitez de nos prix inbattables pour vous offrir des heures de lecture inoubliables.
      </p>

      <section class="banniere1" id="banniere1">
        <div class="livres-list">
          <div v-for="livre in livres" :key="livre.id" class="livre-item">
            <div class="image-container">
              <img class="image_livre" :src="livre.image" alt="wallpaperbetter1">
              <div class="middle" id="middle">
                <h4 class="livre-title">{{ livre.titre }}</h4>
                <h5 class="livre-auteur"><u>Auteur(e)</u> : {{ livre.auteur }}</h5>
                <h5 class="livre-genres"><u>Genres</u> : {{ parseArrayString(livre.genres) }}</h5>
                <h5 class="livre-edition"><u>Maison d'édition</u> : {{ livre.edition }}</h5>
              </div>
            </div>
            <p class="livre-description">
              <u>Résumé</u> : {{ livre.showFullDescription ? livre.resume : truncateText(livre.resume, 150) }}
              <span v-if="livre.resume.length > 150" class="read-more" @click="showFullDescription(livre)">
                Lire la suite
              </span>
            </p>
            <h5 class="livre-note">Note : {{livre.note}}/5</h5>
            <h5 class="livre-prix">Prix : {{livre.prix}}€ </h5>
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

        <section class="banniere2">
          <div>
            <a href="#" class="btn-catalogue">Voir Plus</a>
          </div>
        </section>

      </section>
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
    return{store};
  },
  data(){
    return{
      livres : [],
      compteur : 0,
      totalPanier : this.store.user.totalPanier,
      searchQuery: '',
      filteredLivres: []
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

    methods: {
      filterBooks() {
        if (this.searchQuery) {
          const query = this.searchQuery.toLowerCase();
          this.filteredLivres = this.livres.filter(livre => {
            return livre.titre.toLowerCase().includes(query);
          });
        } else {
          this.filteredLivres = this.livres;
        }
      }
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
      livre.stock-=livre.quantite
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

.search-container{
  background-color: #143B60;
  display: flex;
  justify-content: center;
  font-weight: 360;
  top: 0;
  left: 0;
  align-items: center;
  width: 100%;
  height: 60px;
  margin-top: 60px;
  z-index: 2;
  position: fixed;

}
.search-input{
  width: 80%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  transition: border-color 0.3s ease;
}
.search-input:focus{
  border-color: #3F89A7;
}
.search-icon{
  background-color: #3F89A7;
  position: absolute;
  right: 10px;
  color: #999;
  transition: color 0.3s ease;
}
.search-container:hover .search-icon{
  color: #3F89A7;
}

body{
  font-family:'Palatino', serif;;
  font-weight: 500;
}

.banniere1{
  padding: 100px;
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
  background-color: #3F89A7;
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
  background-color: goldenrod;
  cursor: pointer;
}

.description {
  font-size: 20px;
  color: white;
  padding: 20px;
  text-align: center;
  margin-bottom: 30px;
  font-family: 'Palatino', serif;
}


/* Styles pour le conteneur principal */
.livres-list {
  grd-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  width : 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  text-align: center;

}

.background-image{
  position: fixed;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('https://wallpapercave.com/wp/wp5991978.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.content{
  max-width: 100%;
  text-align: center;
  align-items: center;
  margin-top: 70px;
  padding: 20px ;
}

body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}


/* Styles pour le titre */
h1 {
  font-size: 40px;
  text-align: center;
  margin-bottom: 20px;
  margin-top: 70px;
}

/* Styles pour la description */
p {
  font-size: 18px;
  text-align: center;
}


.livre-item {
  position: relative;
  width: calc(33.33% - 20px);
  margin-right: 10px;
  margin-bottom: 20px;
  /*A ete modifier*/
  padding: 0;
  /*A ete modifier*/
  border: 1px solid unset;
  border-radius: 20px;
  background-color: unset;
  text-align : center;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.livre-item img {
  border-radius: 20px;
  /*A ete modifier*/
  max-width: 100%;
  height: auto;
  /*Tout ce qui suit après a ete ajouter*/
  //object-fit: contain;
  opacity: 1;
  display: block;
  transition: .5s ease;
  backface-visibility: hidden;
  top: 0;
  left: 0;
  object-fit: cover;
}

.image-container{
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  top: 0;
  left: 0;
  justify-content: center;
  position: relative;
  overflow: hidden;
  height: 100%;
  width: 100%;
  border-radius: 20px;
  align-items: center;
  transition: opacity 0.5s ease;
}

.image-container img{
   display: block;
  width: 100%;
  height: auto;
  opacity: 1;
  transition: transform 0.5s ease;
}

.image-container::after{
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.5s ease;
}

.image-container:hover img{
  transform: scale(1.20);

}
.image-container:hover::after{
  opacity: 1;
}

/*Tout ce qui suit après a ete ajouter*/
.middle{
  z-index: 1;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;height: 100%;
  box-sizing: border-box;
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  transition: opacity 0.5s ease;
  //background-color: rgba(0, 0, 0, 0.5);
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%)
}

.image-container:hover .middle{
  opacity: 1;
}

.livre-item h4{
  color: white;
  font-size: 16px;
  margin-bottom: 5px;
}

.livre-item h5{
  color: white;
  font-size: 14px;
  margin-bottom: 5px;
}

.livre-item h3 {
  font-size: 12px;
  margin-bottom: 5px;
}

.livre-item p {
  font-size: 12px;
  margin-bottom: 5px;
  color: white;
}

.livre-title {
  font-size: 20px;
  font-weight: bold;
  font-family: 'Palatino', serif;
}

.livre-auteur,
.livre-genres,
.livre-edition,
.livre-note,
.livre-prix {
  font-size: 16px;
  margin-bottom: 5px;
  padding: 16px 32px;
  text-align: justify;
  overflow: hidden;
  max-height: 3em;
  line-height: 1.5em;
  /*Tout ce qui suit après a ete ajouter*/
  font-family: 'Palatino', serif;
}

.livre-description {
  font-size: 16px;
  text-align: justify;
  overflow: hidden;
  max-height: 80px;
  /*A ete modifier*/
  line-height: 1.5em;
  /*Tout ce qui suit après a ete ajouter*/
  font-family: 'Palatino', serif;
  /*A ete modifier*/
  height: 200px;
}


.read-more{
  cursor: pointer;
  color: blue;
}

.livre-item .stock-vide{
  color : red;
}

.banniere2{
  position: relative;
  width: 100%;
  min-height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn-catalogue{
  align-items: center;
  font-size: 1em;
  color: #162142;
  background: white;
  padding: 10px 20px;
  display: inline-block;
  margin-top: 20px;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0;
  transition: 0.5s;
  margin-left: 10px;
}

.btn-catalogue:hover{
  letter-spacing: 2px;
}

</style>