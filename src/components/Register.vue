<template>
  <div class="form-container">
  <div class="flex">
    <div class="register">
      <router-link to="/"><p class="info_form">Vous possédez déjà un compte ? Cliquez ici !</p></router-link>
      <div class="signup_form">

        <h1 class="titre_form">Créer un compte</h1>
        <div class="ligne">
          <label><b>Prénom</b></label>
          <input type="text" v-model="prenom" placeholder="Prénom" name="prenom" required>
        </div>
        <div class="ligne">
          <label><b>E-mail</b></label>
          <input type="email" v-model="email" placeholder="Email" name="email" required>
        </div>
        <div class="ligne">
          <label><b>Mot de Passe</b></label>
          <input type="password" v-model="password" placeholder="Mot de Passe" name="password" required>
        </div>
        <button class="signupButton" @click="register">M'inscrire !</button>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import AuthentificationService from "@/services/authentificationService";

export default {
  name: "Register",
  data(){
    return{
      prenom : '',
      email : '',
      password : ''
    }
  },
  methods:{
    async register(){
      const response = await AuthentificationService.register({
        prenom : this.prenom,
        email: this.email,
        password : this.password
      })
      alert(response.data.message)
    }
  }
}
</script>

<style >

.form-container{
  height : 100vh;
  display : flex;
  justify-content: center;
  align-items: center;
}

.titre_form{
  text-align: center;
  font-weight :700;
  font-size : 40px;
  line-height: 20px;
}

.info_form{
  line-height: 0;
  font-size : 15px;
  color : grey;
}


.register{
  display : flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
}


.signup_form{
  border-radius : 10px;
  display : flex;
  flex-direction: column;
  text-align: left;
  row-gap : 5px;
  width : 470px;
  background-color: #F4F7F9;
  padding : 20px 50px 40px 50px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}

label{
  z-index: 2;
  font-weight: lighter;
}

.register input{
  margin-top:5px;
  padding : 10px;
  border : lightgray 1px solid;
  border-radius: 10px;
}

.register input:focus{
  outline: none;
  border : darkseagreen 2px solid;
}

.signupButton{
  margin-top : 20px;
  padding : 20px 40px;
  background-color: darkseagreen ;
  color: white ;
  font-size : 18px;
  font-weight: bold;
  border-radius: 10px;
  border : none;
}

.signupButton:hover{
  cursor: pointer;
  background-color: #6e9a6f;
}

.register a{
  text-decoration: none;
}

.register p:hover{
  cursor: pointer;
  text-decoration: underline;
}

.ligne{
  display: flex;
  flex-direction: column;
  padding : 8px;
}

</style>