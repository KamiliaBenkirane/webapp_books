<template>
  <Sidebar/>
  <div class="container">

    <input type="text" placeholder="Search..">

    <div class="bloc_commande" v-for="commande in suppressDoublons(this.commandesAdmin)" :key="commande.num_commande">

      <div>
        <h4><u>Utilisateur</u> : {{commande.prenom}} {{commande.nom}}<br> <u>Adresse mail</u> : {{commande.mail}}<br> <u>Satut de la commande</u> : {{commande.statut}}</h4>
      </div>
      <div class="bloc_articles">
        <div  class="article" v-for="article in this.commandesAdmin" v-show="commande.num_commande === article.num_commande "  :key="article.id_commande">

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
          <select :id="'statut_commande_' + commande.num_commande" name="statut_commande">
            <option value="preparation" selected="selected">En préparation </option>

            <option value="acheminement">En cours d'acheminement</option>
            <option value="livraison">En cours de livraison</option>
            <option value="livre">Colis livré</option>
          </select>
            <button @click="updateStatutCommande(commande)">Modifier statut commande</button>

        </div>
      </div>

    </div>

  </div>
</template>

<script>
import {useSessionStore} from "@/stores/session";
import Sidebar from "@/components/Admin/Sidebar";
import axios from "axios";

export default {
  name: "SuivreCommandes",
  components: {Sidebar},
  setup() {
    const store = useSessionStore()
    return {store}
  },
  data(){
    return{
      commandesAdmin : [],
    }
  },
  created(){
    this.getCommandesAdmin()
  },
  methods : {
    getCommandesAdmin(){
      axios.get("http://localhost:3000/getCommandesAdmin").then(response =>{
        if(response.status===400){
          alert("Echec du loading des commandes")
        }
        else{
          this.commandesAdmin = response.data
          console.log(response.data)
        }
      })
    },
    suppressDoublons(list){
      const result = {};

      list.forEach((obj) => {
        const { num_commande, date, time, statut, nom, prenom, mail } = obj;
        const key = `${num_commande}-${date}-${time}-${statut}-${nom}-${prenom}-${mail}`;

        if (result[key]) {
          result[key].total++;
        } else {
          result[key] = {
            num_commande,
            date,
            time,
            prenom,
            nom,
            mail,
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
    },
    updateStatutCommande(commande){
      const elementId = "statut_commande_" + commande.num_commande;
      const statut = document.getElementById(elementId).options[document.getElementById(elementId).selectedIndex].text
      const info = {
        statut : statut,
        num_commande : commande.num_commande
      }
      axios.post("http://localhost:3000/updateStatutCommande", info).then(response =>{
        if(response.status===200){
          this.$router.go()
          console.log(response)
          alert("Statut de livraison mis à jour")

        }
        else{
          alert("Une erreur est survenue")
        }
      })

    }
  }
}

</script>

<style scoped>

.container{
  margin-left : 150px;
  width: 80vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap : 40px;
}

img{
  height : auto;
  width : 70px;
}
.bloc_commande{
  width : 70vw;
  display: flex;
  flex-direction: column;
  justify-content: left;
  background-color: #cccccc;
  border-radius: 10px;
  padding : 10px;
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
  gap : 10px;
}

.article{
  display: flex;
  flex-direction: column;
  height : 200px;
  justify-content: center;
  align-items: center;
  width : 180px;
}

input{
  margin-top : 40px;
  padding : 7px;
  border: 2px solid gray;
  border-radius : 10px;
  width : 300px;
}

</style>