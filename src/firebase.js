import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBDLp4ssQ6swceedbxTh3RnFruRxvTuH6o",
  authDomain: "social-f148f.firebaseapp.com",
  projectId: "social-f148f",
  storageBucket: "social-f148f.appspot.com",
  messagingSenderId: "574422963083",
  appId: "1:574422963083:web:2ae5105d5b398c870f558e",
  measurementId: "G-YH1WLFS3JC",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
