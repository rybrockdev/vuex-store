<template>
  <v-container grid-list-xs>
    <v-layout align-center class="info-box">
      <v-flex sm2 xs12 offset-sm9>
        <h1>Vuex Shop</h1>
        <div>
          <p>Take a look at our products</p>
        </div>
      </v-flex>
    </v-layout>

    <v-layout align-center class="info-box" row wrap>
      <v-flex sm2 xs12 offset-sm1>
        <h1>Our Products</h1>
        <div>
          <p>Take a look at our products and their value</p>
        </div>
      </v-flex>

      <v-flex sm2 xs12>
        <h1>Our Products</h1>
        <div>
          <p>Take a look at our products and their value</p>
        </div>
      </v-flex>

      <v-flex sm2 xs1>
        <h1>Our Products</h1>
        <div>
          <p>Take a look at our products and their value</p>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Home",
  components: {
    // HelloWorld
  }
};
</script>

<style lang="scss">
@import "./src/styles/main.scss";

.info-box .flex h1 {
  @include infobox_mixin(2px, #7a7676, 10px, 2px, #7a7676);
  font-weight: bold;
  text-transform: uppercase;
  font-size: 16px;
  text-align: center;
}
.info-box .flex div {
  background-color: #fff;
  padding: 20px;
}
.layout:first-child {
  height: 40vh;
}
.layout:last-child {
  height: 40vh;
}
</style>
