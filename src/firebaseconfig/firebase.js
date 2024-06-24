// firebase.js

import { getApps, initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut, // Add signOut to the list of imports
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZThdnfAsHWTqs-bOIAVuFqrTUuoRc8Z8",
  authDomain: "my-next-app-7ae9e.firebaseapp.com",
  projectId: "my-next-app-7ae9e",
  storageBucket: "my-next-app-7ae9e.appspot.com",
  messagingSenderId: "855408695695",
  appId: "1:855408695695:web:e36c3632aa7f9696e693fa",
  measurementId: "G-SK1DM4KFL3",
};

let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);

export {
  auth,
  googleProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut, // Export signOut
  db,
  GoogleAuthProvider,
};
