import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  // apiKey: "AIzaSyDyiEMcSpG-JjKtOY8Wjo7FYwcBVY5BTg8",
  // authDomain: "next-pwa-with-firebase.vercel.app",
  // projectId: "web-push-demo-5f2bd",
  // // storageBucket: "web-push-demo-5f2bd.appspot.com",
  // messagingSenderId: "69996489641",
  // appId: "1:69996489641:web:532dcafda552f2a47bb2b8",
  // measurementId: "G-06EEK4MX1R",
  apiKey: "AIzaSyAZ5O1TyMSp_G7Aiqa_x8LXUBB7a9r3Ad8",
  // authDomain: "next-pwa-with-firebase.firebaseapp.com",
  projectId: "next-pwa-with-firebase",
  // storageBucket: "next-pwa-with-firebase.appspot.com",
  messagingSenderId: "83448491839",
  appId: "1:83448491839:web:f9e912c5267a200ea0ad8a",
  measurementId: "G-NNGVWDYMDB",
};

const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
