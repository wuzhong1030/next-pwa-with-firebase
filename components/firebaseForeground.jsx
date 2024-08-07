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
    <div className="w-full p-2">
      <button className="px-3 py-2 bg-blue-600 text-white rounded-lg" onClick={retrieveToken}>retrieveToken</button>
      <h1>token: </h1>
      <textarea className="w-full border-black border-2" value={token} name="textarea" id="textarea"></textarea>
      <h3>notificationPermissionStatus: {notificationPermissionStatus}</h3>
    </div>
  );
}
