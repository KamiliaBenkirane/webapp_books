<template>
  <Sidebar/>
<div class="container">
  <div class="form-container">
    <div class="flex">
      <div class="register">
        <div class="signup_form">

          <h1 class="titre_form">Ajouter un livre</h1>

          <form @submit.prevent="ajouterLivre">
          <div class="ligne_container">

          <div class="ligne">
            <label><b>Titre du livre</b></label>
            <input type="text" v-model="titre" placeholder="Entrez le titre" name="titre" required>
          </div>

          <div class="ligne">
            <label><b>Auteur (Nom Prénom)</b></label>
            <input type="text" v-model="auteur" placeholder="Entrez l'auteur" name="auteur" required>
          </div>

          </div>

          <div class="ligne">
            <label><b>URL de l'image de couverture</b></label>
            <input type="text" v-model="image" placeholder="Entrez l'url" name="image" required>
          </div>

          <div class="ligne_container">

          <div class="ligne">
            <label><b>Stock disponible</b></label>
            <input type="number" v-model="stock" placeholder="Entrez le stock" name="stock" required>
          </div>

          <div class="ligne">
            <label><b>Maison d'édition</b></label>
            <input  type="text" v-model="edition" placeholder="Entrez la maison d'édition" name="edition" required>
          </div>
          </div>

          <div class="ligne">
            <label><b>Resume</b></label>
            <input class="resume" type="text" v-model="resume" placeholder="Entrez le résumé du livre" name="resume" required>
          </div>

          <div class="ligne_container">

            <div class="ligne">
              <label><b>Note sur 5</b></label>
                <input type="number" v-model="note" placeholder="Entrez la note" name="note" required>
            </div>

            <div class="ligne">
              <label><b>Prix unitaire</b></label>
              <input  type="number" v-model="prix" placeholder="Entrez le prix" name="prix" required>
            </div>
          </div>

          <div class="ligne">
            <label><b>Genres</b></label>
            <input type="text" v-model="genres" placeholder="Entrez les genres" name="genres" required>
          </div>
            <button class="signupButton" type="submit">Ajouter le livre !</button>
          </form>

        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Sidebar from "@/components/Admin/Sidebar";
import axios from 'axios'

export default {
  name: "AjouterLivre",
  components: {Sidebar},
  date(){
    return{
      titre : '',
      auteur : '',
      image : '',
      stock : null,
      edition : '',
      resume : '',
      prix : null,
      note : null,
      genres : '',
    }
  },
  methods : {
    ajouterLivre(){
      let livre = {
        titre : this.titre,
        auteur : this.auteur,
        image : this.image,
        stock : this.stock,
        edition : this.edition,
        resume : this.resume,
        prix : this.prix,
        note : this.note,
        genres : this.genres.split(',')
      }
      axios.post("http://localhost:3000/createBook", livre).then(response=>{
        if(response.status === 200){
          alert("Livre ajouté à la base de données !")
        }
      })
    }
  }
}
</script>

<style scoped>
.resume{
  height : 100px;
}



</style>