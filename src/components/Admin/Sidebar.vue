<template>
  <div class="sidebar">
    <ul>
      <li>
        <img src="../../assets/images/maison.png" alt="">
        <p>Home</p>
      </li>
      <li>
        <img src="../../assets/images/statistique.png" alt="">
        <p>Dashboard</p>
      </li>
    </ul>
    <div class="user-logout">
      <div class="user">
        <img src="../../assets/images/avatar-homme.png" alt="">
        <p>{{ this.store.getNom() }} {{ this.store.getPrenom() }}</p>
      </div>
      <router-link to="/"><p id="logout" @click="logout">Log out</p ></router-link>



    </div>
  </div>
</template>

<script>
import {useSessionStore} from "@/stores/session";

export default {
  name: "Sidebar",
  setup(){
    const store = useSessionStore()
    return{store}
  }
}
</script>

<style scoped>
.user-logout{
  margin-top: 60vh;
  background-color: #ececec;
  height : 100px;
  padding : 10px;
  display: flex;
  gap : 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}


a{
  text-decoration: none;
}


#logout{
  font-size : 13px;
  color : grey;
  line-height: 0;

}

#logout:hover{
  text-decoration: underline;
  cursor: pointer;
}

.sidebar:hover .user{
  display : flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap : 10px;
  padding : 5px;
}

.sidebar img{
  color : black;
  width : 30px;
  height: auto;
}

.container {
  display: flex;
}

.sidebar {
  transition : all 0.2s ease;
  width: 70px;
  background-color: #f1f1f1;
  height: 100vh;
  position: fixed;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.sidebar:hover{
  width : 200px;

}

.sidebar:hover ul li{
  display : flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap : 10px;
  padding : 5px;

}

.sidebar:hover ul li:hover{
  background-color: #e2e2e2;
  cursor: pointer;
  border-radius: 10px;
  width : 150px;
}

.sidebar:hover p{
  display: block;

}

.sidebar ul {
  list-style-type: none;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap : 15px;
  justify-content: center;
  align-items: center;

}

.sidebar ul li {
  padding : 15px;
  display: flex;
  flex-direction: row;
}

.sidebar p{
  display: none;
}

.sidebar ul li a {
  display: block;
  text-decoration: none;
  color: #333;
}

</style>