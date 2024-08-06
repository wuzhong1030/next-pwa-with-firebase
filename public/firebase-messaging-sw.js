importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-messaging.js");

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyiEMcSpG-JjKtOY8Wjo7FYwcBVY5BTg8",
  authDomain: "web-push-demo-5f2bd.firebaseapp.com",
  projectId: "web-push-demo-5f2bd",
  storageBucket: "web-push-demo-5f2bd.appspot.com",
  messagingSenderId: "69996489641",
  appId: "1:69996489641:web:532dcafda552f2a47bb2b8",
  measurementId: "G-06EEK4MX1R",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
  const promiseChain = clients
    .matchAll({
      type: "window",
      includeUncontrolled: true,
    })
    .then((windowClients) => {
      for (let i = 0; i < windowClients.length; i++) {
        const windowClient = windowClients[i];
        windowClient.postMessage(payload);
      }
    })
    .then(() => {
      return self.registration.showNotification("my notification title");
    });
  return promiseChain;
});

self.addEventListener("notificationclick", function (event) {
  // do what you want
  // ...
});
