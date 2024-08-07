import { useEffect, useState } from "react";
import { getMessaging, getToken } from "firebase/messaging";
import firebaseApp from "@/lib/firebase";

const useFcmToken = () => {
  const [token, setToken] = useState("");
  const [notificationPermissionStatus, setNotificationPermissionStatus] = useState("");

  const retrieveToken = async () => {
    try {
      if (typeof window !== "undefined" && "serviceWorker" in navigator) {
        const messaging = getMessaging(firebaseApp);

        // Request notification permission
        const permission = await Notification.requestPermission();
        setNotificationPermissionStatus(permission);

        if (permission === "granted") {
          const currentToken = await getToken(messaging, {
            vapidKey: "BAGI883fqX5-EZoBMGVYSxGZyJzB7klsS5-m7gO-qNaHY351YaUE9apj2VIt921cyFrAB-zhqNRTdLeT8x8xuio", // Replace with your Firebase project's VAPID key
          });
          if (currentToken) {
            setToken(currentToken);
          } else {
            console.log("No registration token available. Request permission to generate one.");
          }
        }
      }
    } catch (error) {
      console.log("Error retrieving token:", error);
    }
  };

  useEffect(() => {
    retrieveToken();
  }, []);

  return { token, retrieveToken, notificationPermissionStatus };
};

export default useFcmToken;
