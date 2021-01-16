import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBf3qjOaWSbFryV5mVMF1u3bMzOZjrG1Qo",
  authDomain: "clone-f9965.firebaseapp.com",
  projectId: "clone-f9965",
  storageBucket: "clone-f9965.appspot.com",
  messagingSenderId: "802810249060",
  appId: "1:802810249060:web:1cd484d96690ceb0dc4471",
  measurementId: "G-65PLW3GXVH",
});

//const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
