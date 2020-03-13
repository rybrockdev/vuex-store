<template>
  <v-app id="App">
    <Navbar />

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  components: {
    Navbar
  },
  name: "App",
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  })
};
</script>

<style lang="scss">
#App {
  background-color: #eee;
}
h1 {
  @include infobox_mixin(2px, #7a7676, 10px, 2px, #7a7676);
  font-weight: bold;
  text-transform: uppercase;
  font-size: 16px;
  text-align: center;
  background-color: #f5f5f5;
}
#info {
  background-color: #fff;
}
</style>