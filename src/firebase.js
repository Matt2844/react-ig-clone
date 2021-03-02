import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyB9O2hUNb4Y0Rx3DX4-gthA0q5f6sWKOXo",
  authDomain: "react-ig-project.firebaseapp.com",
  projectId: "react-ig-project",
  storageBucket: "react-ig-project.appspot.com",
  messagingSenderId: "698941744951",
  appId: "1:698941744951:web:a730e9c96098049931dcb2"
}

const firebaseApp = firebase.initializeApp
  (firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider, storage };