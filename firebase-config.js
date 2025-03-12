// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1rvb6kFtJMk_-WP6ebqXPdHxUsRbgWtA",
  authDomain: "notiftest-9805e.firebaseapp.com",
  projectId: "notiftest-9805e",
  storageBucket: "notiftest-9805e.firebasestorage.app",
  messagingSenderId: "543957849260",
  appId: "1:543957849260:web:9426c787b54814721fbb09",
  measurementId: "G-F0M3HB8WPD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);