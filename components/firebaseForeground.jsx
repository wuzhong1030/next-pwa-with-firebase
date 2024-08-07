"use client";

import { useEffect } from "react";
import { getMessaging, onMessage } from "firebase/messaging";
import firebaseApp from "@/lib/firebase";
import useFcmToken from "@/hooks/useFcmToken";

export default function FcmTokenComp() {
  const { token, retrieveToken, notificationPermissionStatus } = useFcmToken();

  useEffect(() => {
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      if (notificationPermissionStatus === "granted") {
        const messaging = getMessaging(firebaseApp);
        const unsubscribe = onMessage(messaging, (payload) => console.log("Foreground push notification received:", payload));
        return () => {
          unsubscribe(); // Unsubscribe from the onMessage event on cleanup
        };
      }
    }
  }, [notificationPermissionStatus]);

  return (
    <div>
      <button onClick={retrieveToken}>retrieveToken</button>
      <h1>token: {token}</h1>
      <h3>notificationPermissionStatus: {notificationPermissionStatus}</h3>
    </div>
  );
}
