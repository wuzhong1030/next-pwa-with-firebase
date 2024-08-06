import { clientsClaim } from "workbox-core";
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging/sw";

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
const firebaseApp = initializeApp({
  apiKey: "AIzaSyDyiEMcSpG-JjKtOY8Wjo7FYwcBVY5BTg8",
  authDomain: "next-pwa-with-firebase.vercel.app",
  projectId: "web-push-demo-5f2bd",
  // storageBucket: "web-push-demo-5f2bd.appspot.com",
  messagingSenderId: "69996489641",
  appId: "1:69996489641:web:532dcafda552f2a47bb2b8",
  measurementId: "G-06EEK4MX1R",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = getMessaging(firebaseApp);
messaging.setBackgroundMessageHandler(function (payload) {
  const promiseChain = clients
    .matchAll({
      type: "window",
      includeUncontrolled: true,
    })
    .then((windowClients) => {
      for (let i = 0; i < windowClients.length; i++) {
        const windowClient = windowClients[i];
        windowClient.postMessage(payload);
      }
    })
    .then(() => {
      return self.registration.showNotification("my notification title");
    });
  return promiseChain;
});

self.addEventListener("notificationclick", function (event) {
  // do what you want
});

const CACHE_NAME = "my-pwa-cache-v1";
const urlsToCache = ["/", "/index.html", "/style.css", "/app.js", "/manifest.json"];

self.addEventListener("install", (event) => {
  self.skipWaiting(); // 使新的 Service Worker 立即进入激活状态
});

self.addEventListener("fetch", (event) => {});

self.addEventListener("push", async (event) => {
  try {
    console.log("PUSH", { event });
    const data = await event.data?.json();
    event?.waitUntil(
      self.registration.showNotification(data.title, {
        body: data.body,
        icon: "/icons/icon-48x48.png",
      }),
    );
  } catch (error) {
    console.error("PUSH ERROR", { error });
  }
});

self.addEventListener("notificationclick", (event) => {
  console.log(999, event);
  event.notification.close(); // 关闭通知

  if (event.action === "open_url") {
    clients.openWindow("https://example.com"); // 打开链接
  } else if (event.action === "close") {
    // 可以在这里处理关闭操作
  } else {
    // 处理通知点击
    clients.openWindow("https://example.com");
  }
});

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      console.log("clientsClaim", clientsClaim);
      await clientsClaim(); // 1111立即接管所有控制的页面
    })(),
  );
});
