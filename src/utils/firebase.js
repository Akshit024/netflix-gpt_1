// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfeTLDCRmxh6tpvJYnAQb4U1_fWgVNSi0",
  authDomain: "netflix-gpt-c808d.firebaseapp.com",
  projectId: "netflix-gpt-c808d",
  storageBucket: "netflix-gpt-c808d.appspot.com",
  messagingSenderId: "8275838350",
  appId: "1:8275838350:web:3fd94cbdf948e20a8f50df",
  measurementId: "G-F14YT5B0EN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();
