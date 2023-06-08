<template>
  <div class="form-container">
    <div class="flex">
      <div class="register">
        <router-link to="/register"><p class="info_form">Vous n'avez pas encore de compte ? Cliquez ici !</p></router-link>
        <div class="signup_form">

          <h1 class="titre_form">Se connecter</h1>
          <div class="ligne">
            <label><b>E-mail</b></label>
            <input type="email" v-model="mail" placeholder="Email" name="mail" required>
          </div>
          <div class="ligne">
            <label><b>Mot de Passe</b></label>
            <input type="password" v-model="mdp" placeholder="Mot de Passe" name="mdp" required>
          </div>



          <button class="signupButton" @click="login()">Se connecter !</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "Login",
  data(){
    return{
      email : '',
      mdp : ''
    }
  },
  methods:{
    login(){
      axios.post("http://localhost:3000/login", {
        mail: this.mail,
        mdp: this.mdp
      })
          .then((response) => {
            console.log(response)
            if (response.status  === 400){

            }
            if (response.status  === 200){
              this.$router.push('/home')
            }


          })
          .catch((err) => {

            console.log(err)
            alert("wrong password")
          });
    }
  }
}

</script>

<style scoped>

</style>