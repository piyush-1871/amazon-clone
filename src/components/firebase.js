import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCGTnOe8tM52BM7iQTrNa2s8GkdHbanUHk",
  authDomain: "clone-9d9f5.firebaseapp.com",
  projectId: "clone-9d9f5",
  storageBucket: "clone-9d9f5.appspot.com",
  messagingSenderId: "1077001178389",
  appId: "1:1077001178389:web:2ac0aac5c1ddb8ee54ad1c",
  measurementId: "G-N6N298L3RE"
});
const db = firebase.firestore();
const auth = firebase.auth();

export {db, auth};

