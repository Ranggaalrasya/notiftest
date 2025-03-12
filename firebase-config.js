// Inisialisasi Firebase
const firebaseConfig = {
    apiKey: "AIzaSyB1rvb6kFtJMk_-WP6ebqXPdHxUsRbgWtA",
    authDomain: "notiftest-9805e.firebaseapp.com",
    projectId: "notiftest-9805e",
    storageBucket: "notiftest-9805e.firebasestorage.app",
    messagingSenderId: "543957849260",
    appId: "1:543957849260:web:9426c787b54814721fbb09",
    measurementId: "G-F0M3HB8WPD"
  };

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();