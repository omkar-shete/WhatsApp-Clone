// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
//
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: `${process.env.REACT_API_firebaseKey}`,
  apiKey: "AIzaSyAb5-5seWtC9Yg7556nYA9_pid8TdZ-4bc",
  authDomain: "whatsapp-clone-7f650.firebaseapp.com",
  projectId: "whatsapp-clone-7f650",
  storageBucket: "whatsapp-clone-7f650.appspot.com",
  messagingSenderId: "327839125323",
  appId: "1:327839125323:web:694852fe36af4438e6e2ce"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default db;
export {auth, provider};
