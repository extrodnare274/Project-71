import firebase from "firebase";
require("@firebase/firestore");

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBockHid15xvXD5UXloB0Lxeh-lRVN_O90",
  authDomain: "project-71real.firebaseapp.com",
  projectId: "project-71real",
  storageBucket: "project-71real.appspot.com",
  messagingSenderId: "704623431123",
  appId: "1:704623431123:web:6af4c068fe197e43203326"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);




export default firebase.firestore();
