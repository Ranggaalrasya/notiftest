// main.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getMessaging, getToken, onMessage } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging.js";
import { firebaseConfig } from './firebase-config.js';

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// Minta izin notifikasi
document.getElementById('enable-notifications').addEventListener('click', () => {
    Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
            console.log('Izin notifikasi diberikan.');
            // Dapatkan token perangkat
            getToken(messaging, { vapidKey: 'VAPID_KEY_ANDA' }).then((currentToken) => {
                if (currentToken) {
                    console.log('Token perangkat:', currentToken);
                    // Simpan token ke server Anda jika perlu
                } else {
                    console.log('Tidak ada token perangkat yang tersedia.');
                }
            }).catch((err) => {
                console.log('Gagal mendapatkan token perangkat:', err);
            });
        } else {
            console.log('Izin notifikasi ditolak.');
        }
    });
});

// Kirim notifikasi dengan delay
document.getElementById('send-notification').addEventListener('click', () => {
    const delay = 5000; // Delay dalam milidetik (misalnya, 5000ms = 5 detik)
    setTimeout(() => {
        const options = {
            body: 'Ini adalah pesan notifikasi.',
            icon: '/path/to/icon.png'
        };
        new Notification('Judul Notifikasi', options);
    }, delay);
});
