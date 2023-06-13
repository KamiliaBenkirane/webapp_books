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
import { useSessionStore} from "@/stores/session";

export default {
  name: "Login",
  setup () {
    const store = useSessionStore()
    return{store}
  },
  data(){
    return{
      mail : '',
      mdp : '',
    }
  },
  methods:{
    login(){
      if(this.mail=== '' || this.mdp ===''){
        alert("Il manque des informations! Merci de remplir tous les champs.")
      }
      else{
        axios.post("http://localhost:3000/login", {
          mail: this.mail,
          mdp: this.mdp
        })
            .then((response) => {
              console.log(response.status);

              if (response.status === 200) {
                console.log("entered in 200")
                if (response.data.message === 'login admin successfull') {
                  console.log(response.data.message)

                  this.store.setNom(response.data.result.rows[0].nom)
                  this.store.setPrenom(response.data.result.rows[0].prenom)
                  this.store.setMail(response.data.result.rows[0].mail)

                  this.$router.push('/homeAdmin');
                }

                else if (response.data.message === 'login successfull') {
                  console.log(response.data.message)
                  console.log(response.data)

                  this.store.setId(response.data.result.rows[0].id)
                  console.log(this.store.getId())
                  this.store.setNom(response.data.result.rows[0].nom)
                  this.store.setPrenom(response.data.result.rows[0].prenom)
                  this.store.setMail(response.data.result.rows[0].mail)
                  this.store.setNumero(response.data.result.rows[0].numero)
                  this.store.setAdresse(response.data.result.rows[0].adresse)

                  this.$router.push('/home');
                } else {
                  alert("Unknown login response");
                }
              } else if (response.status === 400) {
                alert("No account found");
              } else {
                alert("Une erreur est survenue.");
              }
            })
            .catch((err) => {
              console.log(err);
              alert("Adresse mail ou mot de passe incorrect.");
            });

      }

    }
  }
}

</script>

<style scoped>

</style>