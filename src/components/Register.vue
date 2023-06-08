<template>
  <div class="form-container">
  <div class="flex">
    <div class="register">
      <router-link to="/"><p class="info_form">Vous possédez déjà un compte ? Cliquez ici !</p></router-link>
      <div class="signup_form">

        <h1 class="titre_form">Créer un compte</h1>

        <div class="ligne">
          <label><b>Nom</b></label>
          <input type="text" v-model="nom" placeholder="Nom" name="nom" required>
        </div>

        <div class="ligne">
          <label><b>Prénom</b></label>
          <input type="text" v-model="prenom" placeholder="Prénom" name="prenom" required>
        </div>

        <div class="ligne">
          <label><b>E-mail</b></label>
          <input type="email" v-model="mail" placeholder="E-mail" name="mail" required>
        </div>

        <div class="ligne">
          <label><b>Numéro de téléphone</b></label>
          <input type="number" v-model="numero" placeholder="Numéro" name="numero" required>
        </div>

        <div class="ligne">
          <label><b>Adresse de facturation</b></label>
          <input type="text" v-model="adresse" placeholder="Adresse" name="adresse" required>
        </div>

        <div class="ligne">
          <label><b>Mot de Passe</b></label>
          <input type="password" v-model="mdp" placeholder="Mot de Passe" name="mdp" required>
        </div>

        <button class="signupButton" @click="register()">M'inscrire !</button>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "Register",
  data(){
    return{
      nom : '',
      prenom : '',
      mail : '',
      numero : null,
      adresse : '',
      mdp : ''
    }
  },
  methods:{
    register(){
      axios.post("http://localhost:3000/createUser", {
            nom: this.nom,
            prenom: this.prenom,
            mail: this.mail,
            numero: this.numero,
            adresse: this.adresse,
            mdp: this.mdp,
          })
          .then((response) => console.log(response))
          .catch((err) => console.log(err));
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
  font-size : 14px;
  line-height: 7px;
}

.register input{
  margin-top:8px;
  padding : 8px;
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
  padding : 5px;
}

</style>