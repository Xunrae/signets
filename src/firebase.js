import firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';
import 'firebase/firestore';

//Configuration firebase
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCPHD2u1jjZfQ4d-W5qKImDKg1I9BalT4U",
    authDomain: "panier-achat-acl.firebaseapp.com",
    databaseURL: "https://panier-achat-acl-default-rtdb.firebaseio.com",
    projectId: "panier-achat-acl",
    storageBucket: "panier-achat-acl.appspot.com",
    messagingSenderId: "1051741793466",
    appId: "1:1051741793466:web:2c1d0e2f4da06d32f36683",
    measurementId: "G-R9WPZM3JB9"
  };

  //initialiser firebase
  if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
  }

  //initialiser firebaseui
  export const instanceFirebaseUi = new firebaseui.auth.AuthUI(firebase.auth());

  //initialiser firestore
  export const instanceFirestore = firebase.firestore();

  