<template>
  <Navbar/>
  <h1>Home : En cours de développement</h1>
  <Footer/>
</template>

<script setup>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
</script>




<script>
import axios from 'axios'
export default {
  name: "Home",
  data(){
    return{
      user : []
    }
  },
  mounted(){
    axios.get('http://localhost:3000/user')
        .then((response) => {
          console.log(response.data.rows);
        })
        .catch((err) => console.log(err));
  }
}
</script>

<style scoped>
h1{
  margin-top : 70px;
}

</style>