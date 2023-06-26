<template>
  <Navbar/>
  <div class="background-image"></div>
  <div class="container">

      <div class="bloc_commande" v-for="commande in suppressDoublons(this.commandes)" :key="commande.num_commande">

        <div>
          <h4> <u>Satut de la commande</u> : {{commande.statut}}</h4>
        </div>
        <div class="bloc_articles">
          <div  class="article" v-for="article in this.commandes" v-show="commande.num_commande === article.num_commande "  :key="article.id_commande">

              <img :src="article.image" alt="image_article">
            <h4>{{article.titre}}  x{{article.quantite}}</h4>


          </div>
        </div>


        <div class="bloc_details_commande">
          <div>
            <p><u>Num commande</u> : {{commande.num_commande}}</p>
            <p><u>Date de commande</u> : {{formattedDate(commande)}}</p>
          </div>
          <div>
            <button>Voir la commande</button>
          </div>
        </div>

      </div>

  </div>


</template>

<script>
import Navbar from "@/components/User/Navbar";
import axios from 'axios'
import {useSessionStore} from "@/stores/session";

export default {
  name: "Commandes",
  components: {
    Navbar,
  },
  data(){
    return {
      commandes : [],
    }
  },
  setup () {
    const store = useSessionStore()
    return{store}
  },
  created(){
    this.getCommandes()
  },
  methods : {
    getCommandes(){
      let user = {
        id : this.store.getId()
      }
      axios.post("http://localhost:3000/getCommandes", user).then(response =>{
        if(response.status===400){
          alert("Echec du loading des commandes")
        }
        else{
          this.commandes = response.data
          console.log(response.data)
        }
      })
    },
    suppressDoublons(list){
      const result = {};

      list.forEach((obj) => {
        const { num_commande, date, time, statut } = obj;
        const key = `${num_commande}-${date}-${time}-${statut}`;

        if (result[key]) {
          result[key].total++;
        } else {
          result[key] = {
            num_commande,
            date,
            time,
            statut,
            total: 1,
          };
        }
      });
      return Object.values(result);
    },
    formattedDate(element){
      const date = new Date(element.date);
      const options = { day: "numeric", month: "long", year: "numeric" };
      const formattedDate = date.toLocaleDateString("fr-FR", options);
      return formattedDate
    }
  }
}
</script>

<style scoped>
.container{
  margin-top : 80px;
  width : 100vw;
  display : flex;
  flex-direction: row;
  flex-wrap : wrap;
  justify-content: center;
  align-items: center;
  gap : 10px;
}

img{
  height : auto;
  width : 120px;
}

.bloc_commande{
  width : 70vw;
  padding : 20px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  background-color: #cccccc;
  border-radius: 10px;
  gap : 35px;
}

.bloc_articles{
  display : flex;
  height : 200px;
  flex-direction: row;
  flex-wrap : wrap;
  gap : 10px;
}

.bloc_details_commande{
  display : flex;
  flex-direction: row;
  align-items: center;
  gap : 50px;
}

.article{
  display: flex;
  flex-direction: column;
  height : 200px;
  justify-content: center;
  align-items: center;
  width : 180px;
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

</style>