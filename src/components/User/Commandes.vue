<template>
  <Navbar/>
  <div class="container">

      <div class="bloc_commande" v-for="commande in suppressDoublons(this.commandes)" :key="commande.num_commande">

        <div>
          <h4> Satut de la commande : {{commande.statut}}</h4>
          <p>Nombre d'articles : {{commande.total}}</p>
        </div>
        <div class="bloc_articles">
          <div  class="article" v-for="article in this.commandes" v-show="commande.num_commande === article.num_commande "  :key="article.id_commande">

              <img :src="article.image" alt="image_article">
            <h4>{{article.titre}}  x{{article.quantite}}</h4>


          </div>
        </div>


        <div class="bloc_details_commande">
          <div>
            <p>Num commande : {{commande.num_commande}}</p>
            <p>Date de commande : {{commande.date}}</p>
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
import Footer from "@/components/User/Footer";
import axios from 'axios'
import {useSessionStore} from "@/stores/session";

export default {
  name: "Commandes",
  components: {
    Navbar,
    Footer
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
  width : 100px;
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

</style>