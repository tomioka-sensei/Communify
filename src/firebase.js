// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyDOzBbGKZMbu9HQU-UgyIMaPjLqWvc8SVs",
  authDomain: "hack-cbs-4348b.firebaseapp.com",
  projectId: "hack-cbs-4348b",
  storageBucket: "hack-cbs-4348b.appspot.com",
  messagingSenderId: "933257583037",
  appId: "1:933257583037:web:f4af523df6bcef19fddad4",
  measurementId: "G-W80X5673SY"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {app,auth};
