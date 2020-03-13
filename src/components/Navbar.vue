<template>
  <div>
    <v-navigation-drawer color="primary" v-model="drawer" app>
      <ul>
        <router-link tag="li" to="/">
          <v-icon color="orange">home</v-icon>Home
        </router-link>
        <router-link tag="li" to="/menu">
          <v-icon color="#fff">restaurant_menu</v-icon>Menu
        </router-link>
        <router-link tag="li" to="/about">
          <v-icon color="#f5df4b">info</v-icon>About
        </router-link>
        <router-link tag="li" to="/login">
          <v-icon color="#f5df4b">info</v-icon>Login
        </router-link>
        <router-link tag="li" to="/admin">
          <v-icon color="#7a7676">info</v-icon>Admin
        </router-link>
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
// import "./src/styles/variables.scss";

export default {
  name: "Navbar",
  data: () => ({
    drawer: null
  })
};
</script>

<style lang="scss">
nav ul {
  padding: 0;
  margin-top: 20px;
  text-decoration: none;
}
nav li {
  color: orange;
  margin-left: 15%;
  padding: 5px 20px;
  list-style-type: none;
  cursor: pointer;
}
nav li i {
  margin-right: 10px;
}
nav li:last-child {
  position: absolute;
  bottom: 40px;
  color: #f5df4b;
}
</style>
