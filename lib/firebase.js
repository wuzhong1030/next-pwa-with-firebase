// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken } from "firebase/messaging";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyiEMcSpG-JjKtOY8Wjo7FYwcBVY5BTg8",
  authDomain: "next-pwa-with-firebase.vercel.app",
  projectId: "web-push-demo-5f2bd",
  // storageBucket: "web-push-demo-5f2bd.appspot.com",
  messagingSenderId: "69996489641",
  appId: "1:69996489641:web:532dcafda552f2a47bb2b8",
  measurementId: "G-06EEK4MX1R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const messaging = getMessaging(app);
