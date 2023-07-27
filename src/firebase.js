// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByVaFDz_imGCMoQVnpHGbGD6q9cfUI8pc",
  authDomain: "nolanai-73d42.firebaseapp.com",
  projectId: "nolanai-73d42",
  storageBucket: "nolanai-73d42.appspot.com",
  messagingSenderId: "674428437471",
  appId: "1:674428437471:web:f059b48b54f038e3dffa6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);