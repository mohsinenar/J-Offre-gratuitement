import firebase from "firebase/app";
import  "firebase/storage";
import 'firebase/firestore';
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyD1Wg3aSrmIgCKBbBusN5uzzTBOgk4Eb3I",
    authDomain: "j-offre-gratuitement-3b3a5.firebaseapp.com",
    databaseURL: "https://j-offre-gratuitement-3b3a5.firebaseio.com",
    projectId: "j-offre-gratuitement-3b3a5",
    storageBucket: "j-offre-gratuitement-3b3a5.appspot.com",
    messagingSenderId: "26391709226",
    appId: "1:26391709226:web:bb424a28ab7bd57c19e553",
    measurementId: "G-BKNGZ1N1PL"
  };
  ;
  export const db = firebase.initializeApp(firebaseConfig).firestore();
  export const storage = firebase.storage();

