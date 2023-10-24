import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCnYd9Y7mE288__YsvPchDjhj7gH_tDUyQ",
    authDomain: "degixohh.firebaseapp.com",
    projectId: "degixohh",
    storageBucket: "degixohh.appspot.com",
    messagingSenderId: "649390951988",
    appId: "1:649390951988:web:dd2fde7c356a3b5ef34461",
    measurementId: "G-LPMRDF5PFJ"
  };
  
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };