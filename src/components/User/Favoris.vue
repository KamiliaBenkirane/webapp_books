<template>
  <Navbar/>
  <div class="background-image"></div>
  <h1>Favoris : En cours de développement</h1>
</template>


<script setup>
  import Navbar from "@/components/User/Navbar";
</script>


<script>

export default {
  name: "Favoris"
}
</script>

<style scoped>

.background-image{
  position: fixed;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('https://wallpapercave.com/wp/wp5991978.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

h1{
  margin-top : 70px;
  color: white;
}

</style>