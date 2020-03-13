import firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyChcxoPSHsoW0uTDy3kaJWivKtDqlNUlVs",
    authDomain: "vuex-store.firebaseapp.com",
    databaseURL: "https://vuex-store.firebaseio.com",
    projectId: "vuex-store",
    storageBucket: "vuex-store.appspot.com",
    messagingSenderId: "76856663886",
    appId: "1:76856663886:web:b4746a118641c50ef9081f",
    measurementId: "G-GRDQG0Z18Z"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore()
export const dbMenuAdd = db.collection('menuItems'); 