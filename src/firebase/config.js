// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwfZy6DVJ8_DreQ9l8-tVip-e5uz_8cpM",
  authDomain: "ecomerce-vallonejorge.firebaseapp.com",
  projectId: "ecomerce-vallonejorge",
  storageBucket: "ecomerce-vallonejorge.appspot.com",
  messagingSenderId: "1098405912613",
  appId: "1:1098405912613:web:d5e11fd29d3a6f3372dfcc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);