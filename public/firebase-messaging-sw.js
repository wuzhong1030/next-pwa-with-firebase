/*
 * @Author: stone.wu stone.wu@webeye.com
 * @Date: 2024-08-07 11:43:38
 * @LastEditors: stone.wu stone.wu@webeye.com
 * @LastEditTime: 2024-08-29 10:42:58
 * @FilePath: /next-pwa-with-firebase/public/firebase-messaging-sw.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-messaging.js");

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZ5O1TyMSp_G7Aiqa_x8LXUBB7a9r3Ad8",
  authDomain: "next-pwa-with-firebase.vercel.app",
  projectId: "next-pwa-with-firebase",
  // storageBucket: "next-pwa-with-firebase.appspot.com",
  messagingSenderId: "83448491839",
  appId: "1:83448491839:web:f9e912c5267a200ea0ad8a",
  measurementId: "G-NNGVWDYMDB",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("[firebase-messaging-sw.js] Received background message ", payload);
  const { title, body, image, icon, ...restPayload } = payload.data;
  const notificationOptions = {
    body,
    icon: image || "./icons/icon-48x48.png", // path to your "fallback" firebase notification logo
    data: restPayload,
  };
  return self.registration.showNotification(title, notificationOptions);
  // const notificationTitle = payload.notification.title + "111";
  // const notificationOptions = {
  //   body: payload.notification.body + "222222",
  //   icon: "./icons/icon-48x48.png",
  // };
  // self.registration.showNotification(notificationTitle, notificationOptions);
});

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
