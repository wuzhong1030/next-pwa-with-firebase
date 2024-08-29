
importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js');
 importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyAZ5O1TyMSp_G7Aiqa_x8LXUBB7a9r3Ad8",
  authDomain: "next-pwa-with-firebase.vercel.app",
  projectId: "next-pwa-with-firebase",
  // storageBucket: "next-pwa-with-firebase.appspot.com",
  messagingSenderId: "83448491839",
  appId: "1:83448491839:web:f9e912c5267a200ea0ad8a",
  measurementId: "G-NNGVWDYMDB",
};

const domain = self.location.origin;
  console.log('Domain:', domain);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("[firebase-messaging-sw.js] Received background message ", payload);
  // Customize notification here
  const notificationTitle = "Background Message Title";
  const notificationOptions = {
    body: "Background Message body.",
    icon: "/firebase-logo.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

// messaging.onBackgroundMessage((payload) => {
//   console.log("[firebase-messaging-sw.js] Received background message ", payload);
//   const { title, body, image, icon, ...restPayload } = payload.data;
//   const notificationOptions = {
//     body,
//     icon: image || "./icons/icon-48x48.png", // path to your "fallback" firebase notification logo
//     data: restPayload,
//   };
//   return self.registration.showNotification(title, notificationOptions);
//   // const notificationTitle = payload.notification.title + "111";
//   // const notificationOptions = {
//   //   body: payload.notification.body + "222222",
//   //   icon: "./icons/icon-48x48.png",
//   // };
//   // self.registration.showNotification(notificationTitle, notificationOptions);
// });

// messaging.setBackgroundMessageHandler(function (payload) {
//   const promiseChain = clients
//     .matchAll({
//       type: "window",
//       includeUncontrolled: true,
//     })
//     .then((windowClients) => {
//       for (let i = 0; i < windowClients.length; i++) {
//         const windowClient = windowClients[i];
//         windowClient.postMessage(payload);
//       }
//     })
//     .then(() => {
//       // return self.registration.showNotification("my notification title");
//       console.log("[firebase-messaging-sw.js] Received background message ", payload);
//       const notificationTitle = payload.notification.title + "yyyyy";
//       const notificationOptions = {
//         body: payload.notification.body + "xxxxxxx",
//         icon: "./icons/icon-48x48.png",
//       };
//       self.registration.showNotification(notificationTitle, notificationOptions);
//     });
//   return promiseChain;
// });

// self.addEventListener("notificationclick", function (event) {
//   // do what you want
// });
