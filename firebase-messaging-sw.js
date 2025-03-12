importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging.js");


const firebaseConfig = {
    apiKey: "AIzaSyB1rvb6kFtJMk_-WP6ebqXPdHxUsRbgWtA",
    authDomain: "notiftest-9805e.firebaseapp.com",
    projectId: "notiftest-9805e",
    storageBucket: "notiftest-9805e.firebasestorage.app",
    messagingSenderId: "543957849260",
    appId: "1:543957849260:web:9426c787b54814721fbb09",
    measurementId: "G-F0M3HB8WPD"
  };

const messaging = firebase.messaging();

// Tampilkan notifikasi saat menerima push
messaging.onBackgroundMessage((payload) => {
    self.registration.showNotification(payload.notification.title, {
        body: payload.notification.body,
        icon: "/favicon.ico"
    });
});