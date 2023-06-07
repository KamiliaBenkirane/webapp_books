<template>
  <Navbar />
  <router-view ></router-view>
  <Footer/>
</template>

<script setup>
import Navbar from "@/components/Navbar";



import Footer from "@/components/Footer";


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
