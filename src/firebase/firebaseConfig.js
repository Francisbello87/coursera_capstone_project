// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSVyvQmUTHVMktQUS04vy6edGT-K3xFrA",
  authDomain: "coursera-capstone-projec-48d77.firebaseapp.com",
  projectId: "coursera-capstone-projec-48d77",
  storageBucket: "coursera-capstone-projec-48d77.appspot.com",
  messagingSenderId: "1017322952140",
  appId: "1:1017322952140:web:9dd3537d3ceafa24987969"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);