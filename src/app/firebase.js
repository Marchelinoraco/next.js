// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAP6ZsFQcTMlZTr_Nq0ebUpPT-WRVBC-cI",
  authDomain: "next-project-eb.firebaseapp.com",
  projectId: "next-project-eb",
  storageBucket: "next-project-eb.appspot.com",
  messagingSenderId: "452951484910",
  appId: "1:452951484910:web:158362ffb0f95b83db06ff",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
