<template>
  <div class="about">
    <v-container grid-list-xs>
      <v-layout align-center class="info-box">
        <v-flex sm4 xs12 offset-sm1>
          <h1>About Us</h1>
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
  </div>
</template>

<style lang="scss" scoped>
.info-box:first-child .flex h1 {
  font-size: 150%;
  padding: 50px;
}
</style>
