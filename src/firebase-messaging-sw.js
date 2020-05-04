// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
  apiKey: “from firebase config”,
   authDomain: “from firebase config”,
   databaseURL: “from firebase config”,
   projectId: “from firebase config”,
   storageBucket: “from firebase config”,
   messagingSenderId: “from firebase config”,
   appId: “from firebase config”,
   measurementId: “from firebase config”
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
