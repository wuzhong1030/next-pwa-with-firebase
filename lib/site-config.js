import { Metadata, MetadataRoute } from "next";

export const siteConfig = {
  name: "Next.js PWA WebPush Template",
  shortName: "PWA",
  themeColor: "#18181b", // status or title bar color
  backgroundColor: "#18181b", // background color before stylesheets have loaded
  textColor: "#d4d4d8", // text color for opengraph images and splash screens
  description: "Example Next.js App Showcasing PWA and WebPush Notifications",
  authors: [{ name: "Brandin Canfield", url: "https://github.com/bcanfield" }],
  creator: "Brandin Canfield",
  url: new URL(process.env.NODE_ENV === "development" ? "https://localhost:3000" : "https://next-pwa-with-firebase.vercel.app"),
  keywords: ["nextjs", "pwa", "webpush", "notifications", "template", "example", "progressive", "web", "app"],
};
