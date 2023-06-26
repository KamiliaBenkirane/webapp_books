<template>
  <div class="container">
    <Sidebar/>

    <div class="content">
      <div class="box_container">
        <router-link to="/livreStats">
          <div class="box">
            <p>Statistiques livres</p>
            <img class="icone_admin" src="../../assets/images/meilleur-choix.png" alt="livre">
          </div>
        </router-link>


        <router-link to="/userStats">
          <div class="box">
            <p>Statistiques utilisateurs</p>
            <img class="icone_admin" src="../../assets/images/meilleure-experience-client.png" alt="livre">
          </div>
        </router-link>

      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Admin/Sidebar";
export default {
  name: "Statistiques",
  components : {Sidebar}
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

.icone_admin{
  height: 100px;
  width: 100px;
}

.box_container{
  display: flex;
  gap : 20px;
  flex-wrap: wrap;

}

.box{
  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('https://wallpapercave.com/wp/wp5991978.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height : 200px;
  width : 200px;
  display: flex;
  padding-bottom : 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ececea;
  border-radius : 10px;
}

.box:hover{
  cursor: pointer;
  background-color: #e5e4e2;
}

a, p{
  text-decoration: none;
  color : white;
}

</style>