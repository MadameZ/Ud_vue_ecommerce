<template>
  <!-- github : https://github.com/codeconcept/vuex-commerce -->
  <!-- On utilise comme bdd un fichier db.json. -->
  <!-- on install JSON server qui  d’utiliser les fichiers json et permet d’avoir un rapide back-end pour les prototype. -->
  <!--  sudo npm install -g json-server -->
  <!-- Rajouter dans package.json, une entrée propre à ce serveur :  {
  "name": "08-ecommerce-vuex-getters",
  ...
  "scripts": {
   ...
    "jsnsrv" : "json-server --watch db.json",  
  ...
  },-->
  <div id="nav">
    <div id="nav">
      <span class="spacer">
        <router-link to="/">Home</router-link>
      </span>
      <span class="spacer">
        <router-link to="/contact">Contact</router-link>
      </span>
      <span class="spacer">
        <router-link to="/admin">Admin</router-link>
      </span>
      <span class="float-end">
        <router-link to="/cart"
          ><i class="fas fa-shopping-cart">
            cart ({{ numberArticlesInCart }})</i
          ></router-link
        >
      </span>
    </div>
    <div class="container-fluid">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    numberArticlesInCart() {
      return this.$store.getters.getNumberArticlesInCart;
    },
  },
};
</script>

<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.spacer {
  padding: 10px;
}
</style>
