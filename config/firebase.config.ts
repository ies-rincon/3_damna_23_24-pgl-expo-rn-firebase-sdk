// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWYmEmhQvQIPtY7VWsvcK8lchhXd9gw9I",
  authDomain: "damna-pgl-firebase.firebaseapp.com",
  databaseURL: "https://damna-pgl-firebase-default-rtdb.firebaseio.com",
  projectId: "damna-pgl-firebase",
  storageBucket: "damna-pgl-firebase.appspot.com",
  messagingSenderId: "71903547773",
  appId: "1:71903547773:web:d66cbfdf2e132c69acbc14",
};

// Initialize Firebase
export const fireBaseConfigApp = initializeApp(firebaseConfig);
