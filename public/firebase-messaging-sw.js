/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
importScripts("https://www.gstatic.com/firebasejs/6.2.4/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/6.2.4/firebase-messaging.js");
firebase.initializeApp({
	// Project Settings => Add Firebase to your web app
    apiKey: "AIzaSyAxJC1GR6jPvxv1rAWFkFaAxxdRVpGUaYA",
    authDomain: "apb-dev.firebaseapp.com",
    databaseURL: "https://apb-dev.firebaseio.com",
    projectId: "apb-dev",
    storageBucket: "apb-dev.appspot.com",
    messagingSenderId: "420865992720",
    appId: "1:420865992720:web:13ad9932c913d229"
});
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
  const promiseChain = clients
    .matchAll({
      type: "window",
      includeUncontrolled: true
    })
    .then(windowClients => {
      for (let i = 0; i < windowClients.length; i++) {
        const windowClient = windowClients[i];
        windowClient.postMessage(payload);
      }
    })
    .then(() => {
      return registration.showNotification("my notification title");
    });
  return promiseChain;
});
self.addEventListener('notificationclick', function(event) {
  // do what you want
  // ...
});