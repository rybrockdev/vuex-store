<template>
  <v-container>
    <v-row>
      <v-col offset-md="3" md="6" xs="12">
        <h1>Admistrator Login</h1>
        <div id="info">
          <v-text-field v-model="email" label="email"></v-text-field>
          <v-text-field v-model="password" label="password"></v-text-field>
          <v-btn color="green" @click.prevent="signIn">Login</v-btn>
          <v-btn color="red" @click.prevent="signOut">Logout</v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import firebase from "firebase";
import "firebase/firestore";

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    signIn() {
      //   console.log("logged in", this.email, this.passord);
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.replace("/admin");
        })
        .catch(function(error) {
          console.log(error);
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode === "auth/wrong-password") {
            alert("password is incorrect");
          } else {
            alert(error.message);
          }
        });
    },

    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          //   alert("You have logged out");
          this.$router.replace("/");
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
#info {
  padding: 20px;
}
</style>