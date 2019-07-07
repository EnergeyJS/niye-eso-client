import * as firebase from "firebase/app";
import "firebase/messaging";
const initializedFirebaseApp = firebase.initializeApp({
	// Project Settings => Add Firebase to your web app
    apiKey: "AIzaSyAxJC1GR6jPvxv1rAWFkFaAxxdRVpGUaYA",
    authDomain: "apb-dev.firebaseapp.com",
    databaseURL: "https://apb-dev.firebaseio.com",
    projectId: "apb-dev",
    storageBucket: "apb-dev.appspot.com",
    messagingSenderId: "420865992720",
    appId: "1:420865992720:web:13ad9932c913d229"
});
const messaging = initializedFirebaseApp.messaging();
messaging.usePublicVapidKey(
	// Project Settings => Cloud Messaging => Web Push certificates
  "BB6aOskcqCp6IXJOAIAxnIyWUygVewPJU9XEQ3F1ZjiD4BmQChITcBQHlQSDVf9otld7PFnUK_KXYK5vkglEQCw"
);
export { messaging };