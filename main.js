// Konfigurasi Firebase
const firebaseConfig = {
    apiKey: "API_KEY_ANDA",
    authDomain: "PROJECT_ID.firebaseapp.com",
    projectId: "PROJECT_ID",
    storageBucket: "PROJECT_ID.appspot.com",
    messagingSenderId: "SENDER_ID",
    appId: "APP_ID"
};

// Inisialisasi Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Daftarkan service worker
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/firebase-messaging-sw.js")
        .then((registration) => {
            console.log("Service Worker registered:", registration);
            messaging.useServiceWorker(registration);
        })
        .catch((error) => {
            console.log("Service Worker registration failed:", error);
        });
}

// Tombol Izinkan Notifikasi
document.getElementById("allow-notification").addEventListener("click", () => {
    Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
            messaging.getToken({ vapidKey: "VAPID_PUBLIC_KEY" }).then((token) => {
                console.log("Token:", token);
                alert("Notifikasi diizinkan!\nToken: " + token);
            }).catch((err) => {
                console.log("Gagal mendapatkan token:", err);
            });
        } else {
            alert("Izin notifikasi ditolak!");
        }
    });
});

// Tombol Kirim Notifikasi dengan Delay
document.getElementById("send-notification").addEventListener("click", () => {
    setTimeout(() => {
        new Notification("Halo!", {
            body: "Ini adalah notifikasi percobaan!",
            icon: "favicon.ico"
        });
    }, 5000);
});
