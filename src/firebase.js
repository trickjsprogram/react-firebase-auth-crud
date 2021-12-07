import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";

var firebaseConfig = {
  apiKey: "AIzaSyD7RrrG5Buf632ewQcGziFrAnd6wlpWV9s",
  authDomain: "react-auth-43803.firebaseapp.com",
  projectId: "react-auth-43803",
  storageBucket: "react-auth-43803.appspot.com",
  messagingSenderId: "314578414325",
  appId: "1:314578414325:web:e500b43fe12a9adc3e33bc",
};

const firebaseDB = firebase.initializeApp(firebaseConfig);

const db = firebaseDB.database().ref();
const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export { auth, googleAuthProvider, facebookAuthProvider, db };
