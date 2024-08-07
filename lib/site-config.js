import { Metadata, MetadataRoute } from "next";

export const siteConfig = {
  name: "nextjs-pwa-with-firebase",
  shortName: "PWA",
  themeColor: "#ffffff", // status or title bar color
  backgroundColor: "#ffffff", // background color before stylesheets have loaded
  textColor: "#d4d4d8", // text color for opengraph images and splash screens
  description: "Example Next.js App Showcasing PWA and WebPush Notifications",
  authors: [{ name: "stonewu", url: "https://next-pwa-with-firebase.vercel.app" }],
  creator: "stonewu",
  url: new URL(process.env.NODE_ENV === "development" ? "https://localhost:3000" : "https://next-pwa-with-firebase.vercel.app"),
  keywords: ["nextjs", "pwa", "webpush", "notifications", "template", "example", "progressive", "web", "app"],
};
