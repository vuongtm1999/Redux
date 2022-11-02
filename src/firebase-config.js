import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCB1kb9HaQxXNkFT6rqONAEf-2xYcCjQ0Y",
  authDomain: "react-crud-841f5.firebaseapp.com",
  projectId: "react-crud-841f5",
  storageBucket: "react-crud-841f5.appspot.com",
  messagingSenderId: "1042609157399",
  appId: "1:1042609157399:web:a0a12f38bc791666f1f352"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

;

export const db = getFirestore(app);