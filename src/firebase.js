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


  //utiliser async
  const adresseApi = 'https://fakestoreapi.com/products?limit=3';
  //exemple 1 : utilisation d'un callback (fonction de rappel) (methode la moins efficace)
  function testAsyncCallback(){
    let xhr = new XMLHttpRequest();
    xhr.open("get", adresseApi);
    xhr.responseType = 'json';
    xhr.onload = gererReponse;
    xhr.send();

    function gererReponse(){
        console.log("Méthode 1 : avec fonction de rappel : ", xhr.response);
    }
  }
  //testAsyncCallback();
  
  //exemple 2 : utilisation des 'promesses' (ou objet 'Promise')
  function testAsyncPromise(){
    fetch(adresseApi).then(
        reponse =>  reponse.json()
    ).then(
        reponseJSON => console.log("Méthode 2 - Avec une Promise :", reponseJSON)
    ).catch(
        erreur => console.log(erreur)
    );
  }
  //testAsyncPromise();
  //exemple 3 : utilisation de la syntaxe async/await
  async function testAsyncAwait(){
    const reponse = await fetch(adresseApi);
    const reponseJSON = await reponse.json();
    console.log("Méthode 3 - Avec async/await : ", reponseJSON)
  }
  //testAsyncAwait();