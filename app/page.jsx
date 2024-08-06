"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [updateAvailable, setUpdateAvailable] = useState(false);

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
        console.log("xxxx")
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

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      fuck
      {updateAvailable && (
        <div className="update-notification">
          <p>新的更新已准备好。请刷新页面以应用更新。</p>
          <button onClick={handleUpdate}>刷新</button>
        </div>
      )}
    </main>
  );
}
