"use client";

import { useEffect, useState } from "react";
import { getMessaging, onMessage } from "firebase/messaging";
import firebaseApp from "@/lib/firebase";
import useFcmToken from "@/hooks/useFcmToken";

export default function FcmTokenComp() {
  const { token, retrieveToken, notificationPermissionStatus } = useFcmToken();
  const [payload, setPayload] = useState(1);

  useEffect(() => {
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      if (notificationPermissionStatus === "granted") {
        const messaging = getMessaging(firebaseApp);
        const unsubscribe = onMessage(messaging, (payload) => {
          console.log("Foreground push notification received:", payload);
          setPayload("222222");
        });
        return () => {
          unsubscribe(); // Unsubscribe from the onMessage event on cleanup
        };
      }
    }
  }, [notificationPermissionStatus]);

  return (
    <div className="w-full p-2">
      <button className="px-3 py-2 bg-blue-600 text-white rounded-lg" onClick={retrieveToken}>
        retrieveToken
      </button>
      <h1>token: </h1>
      <textarea readOnly className="w-full border-black border-2" value={token}></textarea>
      <h3>notificationPermissionStatus: {notificationPermissionStatus}</h3>
      <h4>payload: {payload}</h4>
    </div>
  );
}
