<template>
  <header>
    <nav>
      <ul>
        <li><router-link to="/home">Home</router-link></li>
        <li><button><router-link to="/favoris"><img src="../assets/favori.png" alt="icone favori"></router-link></button></li>
        <li><button><router-link to="/panier"><img src="../assets/sac-de-courses.png" alt="icone panier"></router-link></button></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Navbar",
}
</script>

<style scoped>
header {

  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 100%;
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .2);
  background-color: white;
  font-weight: 390;
  text-transform: none;
  font-size: 1.1rem;
}

header a {
  text-decoration: none;
  color: #2c3e50;
}

header a:hover{
  color : black;
  text-underline: black;
}

header  img{
  height : 20px;
  width : auto;
}

nav ul{
  list-style-type: none;
  display: flex;
  align-items: center;
  height: inherit;
  gap : 20px;
}

button{
  border : none;
  padding : 7px;
  background-color: white;
  border-radius: 5px;
  cursor: pointer;
}

button:hover{
  background-color: lightgray;
}


</style>