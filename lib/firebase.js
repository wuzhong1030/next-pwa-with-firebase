import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDyiEMcSpG-JjKtOY8Wjo7FYwcBVY5BTg8",
  authDomain: "next-pwa-with-firebase.vercel.app",
  projectId: "web-push-demo-5f2bd",
  // storageBucket: "web-push-demo-5f2bd.appspot.com",
  messagingSenderId: "69996489641",
  appId: "1:69996489641:web:532dcafda552f2a47bb2b8",
  measurementId: "G-06EEK4MX1R",
};

const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
