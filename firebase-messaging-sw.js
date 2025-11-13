importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js");


// importScripts("https://www.gstatic.com/firebasejs/9.6.11/firebase-app-compat.js");
// importScripts("https://www.gstatic.com/firebasejs/9.6.11/firebase-messaging-compat.js");

firebase.initializeApp({
    apiKey: "AIzaSyAvu7XOTcoexHqS9o11uTfQRPyMjJE_z8U",
    authDomain: "push-service-184a8.firebaseapp.com",
    projectId: "push-service-184a8",
    storageBucket: "push-service-184a8.firebasestorage.app",
    messagingSenderId: "1096856520461",
    appId: "1:1096856520461:web:dd1d3fb6c3ea018e3a5244"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log("Received BG message", payload);
    self.registration.showNotification(payload.notification.title, {
        body: payload.notification.body
    });
});
