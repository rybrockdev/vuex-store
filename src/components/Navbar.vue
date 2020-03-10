<template>
  <div>
    <v-navigation-drawer v-model="drawer" app>
      <ul>
        <router-link tag="li" to="/">Home</router-link>
        <router-link tag="li" to="/about">About</router-link>
      </ul>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title class="headline">
        <span>Vuex-Store</span>
        <span class="font-weight-light">Ryan Brockley</span>
      </v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({
    drawer: null
  })
};
</script>
