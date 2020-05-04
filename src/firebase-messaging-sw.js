// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
  apiKey: "AIzaSyDaz-yTS06O_ntmxhaZyBVQ-AlsWQHDhN4",
  authDomain: "push-notification-9f70e.firebaseapp.com",
  databaseURL: "https://push-notification-9f70e.firebaseio.com",
  projectId: "push-notification-9f70e",
  storageBucket: "push-notification-9f70e.appspot.com",
  messagingSenderId: "841978021460",
  appId: "1:841978021460:web:c8a8ac5de9f46ba413cfc1",
  measurementId: "G-KGQR8R3T5P"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
