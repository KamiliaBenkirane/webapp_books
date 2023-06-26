<template>
  <div class="container">
    <Sidebar/>
    <div class="content">
      <table id="customers">
        <thead>
        <tr>
          <th>Classement</th>
          <th>Nom</th>
          <th>Adresse e-mail</th>
          <th>Nombre d'articles achetés</th>
          <th>Somme totale dépensée</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(user, index) in classementUsers" :key="user.id_user">
          <td>{{ index+1 }}</td>
          <td>{{ user.prenom }} {{ user.nom }}</td>
          <td>{{ user.mail }}</td>

          <td>{{ user.somme_quantite }}</td>
          <td>{{ user.produit_total.toFixed(2) }}€</td>
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
      classementUsers : [],
    }
  },
  created() {
    this.getClassementUsers()
  },
  methods : {
    getClassementUsers(){
      axios.get("http://localhost:3000/meilleursClients").then(response =>{
        console.log(response)
        this.classementUsers = response.data;
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
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 60%;
  border-radius: 10px;
}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
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