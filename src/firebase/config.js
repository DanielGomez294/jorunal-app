// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHxEwDD_SorjKd9WYUOQVJcF9HZsVMuTo",
  authDomain: "react-learn-defe0.firebaseapp.com",
  projectId: "react-learn-defe0",
  storageBucket: "react-learn-defe0.appspot.com",
  messagingSenderId: "135581968383",
  appId: "1:135581968383:web:296da6a86f7f0fc56069ca"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const firestoreDB = getFirestore(FirebaseApp);