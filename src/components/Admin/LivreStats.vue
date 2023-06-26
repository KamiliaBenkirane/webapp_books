<template>
  <div class="container">
    <Sidebar/>
      <div class="content">
        <table id="livres">
          <thead>
          <tr>
            <th>Classement</th>
            <th>Titre</th>
            <th>Auteur</th>
            <th>Nombre de livres vendus</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(livre, index) in classementLivres" :key="livre.id_livre">
            <td>{{index+1}}</td>
            <td>{{ livre.titre }}</td>
            <td>{{ livre.auteur }}</td>
            <td>{{ livre.somme_quantite }}</td>
          </tr>
          </tbody>
        </table>
      </div>

</div>
</template>

<script>
import Sidebar from "@/components/Admin/Sidebar";
import axios from "axios";
export default {
  name: "LivreStats",
  components : {Sidebar},
  data(){
    return{
      classementLivres : [],
    }
  },
  created() {
    this.getClassementLivres()
  },
  methods : {
    getClassementLivres(){
      axios.get("http://localhost:3000/meilleursLivres").then(response =>{
        console.log(response)
        this.classementLivres = response.data;
      } )
    },
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
#livres {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 60%;
  border-radius: 10px;
}

#livres td, #livres th {
  color: #162142;
  border: 1px solid #ddd;
  padding: 8px;
}

#livres tr:nth-child(even){background-color: #3F89A7;}

#livres tr:hover {background-color: #F4F7F9;}

#livres th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('https://wallpapercave.com/wp/wp5991978.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
}
</style>