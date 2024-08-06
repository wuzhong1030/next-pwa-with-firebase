"use client";

import { useEffect, useState } from "react";
import { getToken, onMessage } from "firebase/messaging";

import { messaging } from "./lib/firebase";

export default function Home() {
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const [token, setToken] = useState("null");
  const [msg, setMsg] = useState("null");

  useEffect(() => {
    onMessage(messaging, () => {
      setMsg("fuck.....");
    });
  }, []);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      const onUpdateReady = (registration) => {
        registration.onupdatefound = () => {
          const installingWorker = registration.installing;
          if (installingWorker) {
            installingWorker.onstatechange = () => {
              if (installingWorker.state === "installed") {
                if (navigator.serviceWorker.controller) {
                  setUpdateAvailable(true); // 新版本可用
                }
              }
            };
          }
        };
      };

      navigator.serviceWorker.ready
        .then((registration) => {
          onUpdateReady(registration);
        })
        .catch((error) => {
          console.error("Error during service worker registration:", error);
        });

      // Register Service Worker if not already registered
      if (!navigator.serviceWorker.controller) {
        console.log("xxxx");
        navigator.serviceWorker
          .register("/sw.js")
          .then((registration) => {
            onUpdateReady(registration);
          })
          .catch((error) => {
            console.error("Error during service worker registration:", error);
          });
      }

      // Listen for messages from the service worker
      navigator.serviceWorker.addEventListener("message", (event) => {
        if (event.data && event.data.type === "UPDATE_READY") {
          setUpdateAvailable(true);
        }
      });
    }
  }, []);

  const handleUpdate = () => {
    if (navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage({ type: "SKIP_WAITING" });
      navigator.serviceWorker.controller.addEventListener("statechange", (e) => {
        if (e.target.state === "activated") {
          window.location.reload();
        }
      });
    }
  };

  function notif() {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        getToken(messaging, { vapidKey: "BO-PyAKSc9jctgPYma0CKkLBc7m1KAisA6f3f9cakvEKgggn_jgROun1vJiJvDC962YEPaRyFuhi-bI_n6fc18I" })
          .then((currentToken) => {
            if (currentToken) {
              console.log(currentToken);
              setToken(currentToken);
            } else {
              // Show permission request.
              console.log("No registration token available. Request permission to generate one.");
              // Show permission UI.
            }
          })
          .catch((err) => {
            console.log("An error occurred while retrieving token. ", err);
          });
      } else {
        console.log("Unable to get permission to notify.");
      }
    });
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>web-push-with-firebase</h1>
      <button onClick={notif}>Notification</button>
      <div>token: {token}</div>
      <h5>msg: {msg}</h5>
      {/* {updateAvailable && (
        <div className="update-notification">
          <p>新的更新已准备好。请刷新页面以应用更新。</p>
          <button onClick={handleUpdate}>刷新</button>
        </div>
      )} */}
    </main>
  );
}
