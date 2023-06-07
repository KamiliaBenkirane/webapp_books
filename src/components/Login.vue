<template>
  <div class="form-container">
    <div class="flex">
      <div class="register">
        <router-link to="/register"><p class="info_form">Vous n'avez pas encore de compte ? Cliquez ici !</p></router-link>
        <div class="signup_form">

          <h1 class="titre_form">Se connecter</h1>
          <div class="ligne">
            <label><b>E-mail</b></label>
            <input type="email" v-model="email" placeholder="Email" name="email" required>
          </div>
          <div class="ligne">
            <label><b>Mot de Passe</b></label>
            <input type="password" v-model="password" placeholder="Mot de Passe" name="password" required>
          </div>



          <button class="signupButton" @click="register">Se connecter !</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login"
}
</script>

<style scoped>

</style>