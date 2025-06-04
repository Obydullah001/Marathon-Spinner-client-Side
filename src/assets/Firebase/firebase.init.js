// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTJ7zC-U0Oto9Lvas2-IL17JfR2pXNbcc",
  authDomain: "marathon-spinner-auth.firebaseapp.com",
  projectId: "marathon-spinner-auth",
  storageBucket: "marathon-spinner-auth.firebasestorage.app",
  messagingSenderId: "598369292350",
  appId: "1:598369292350:web:4cfa9e93997a1bba2bc16f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);