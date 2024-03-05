// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-8b898.firebaseapp.com",
  projectId: "mern-8b898",
  storageBucket: "mern-8b898.appspot.com",
  messagingSenderId: "1098180227539",
  appId: "1:1098180227539:web:862b64c6557ea5578fff26",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
