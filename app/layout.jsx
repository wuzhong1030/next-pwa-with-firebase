import "./globals.css";

// export const metadata = {
//   title: "PWA with Next 13",
//   description: "PWA application with Next 13",
//   generator: "Next.js",
//   manifest: "/manifest.json",
//   keywords: ["nextjs", "nextjs13", "next13", "pwa", "next-pwa"],
//   themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
//   // authors: [
//   //   { name: "Rajesh Prajapati" },
//   //   {
//   //     name: "Rajesh Prajapati",
//   //     url: "https://www.linkedin.com/in/raazeshp96/",
//   //   },
//   // ],
//   viewport: "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
//   icons: [
//     { rel: "apple-touch-icon", url: "icons/icon-128x128.png" },
//     { rel: "icon", url: "icons/icon-128x128.png" },
//   ],
// };

const APP_NAME = "next-pwa-with-firebase example";
const APP_DESCRIPTION = "This is an example of using next-pwa plugin";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="application-name" content={APP_NAME} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={APP_NAME} />
        <meta name="description" content={APP_DESCRIPTION} />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#FFFFFF" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover" />
        <link rel="apple-touch-icon" sizes="192x192" href="/icons/icon-192x192.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/icons/icon-48x48.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
