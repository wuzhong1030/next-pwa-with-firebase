/*
 * @Author: stone.wu stone.wu@webeye.com
 * @Date: 2024-08-29 09:23:27
 * @LastEditors: stone.wu stone.wu@webeye.com
 * @LastEditTime: 2024-08-29 09:26:19
 * @FilePath: /next-pwa-with-firebase/next.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const runtimeCaching = require("next-pwa/cache");

// Configuration options for Next.js
const nextConfig = {
  reactStrictMode: true, // Enable React strict mode for improved error handling
  swcMinify: true, // Enable SWC minification for improved performance
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development", // Remove console.log in production
  },
};

// Configuration object tells the next-pwa plugin
const withPWA = require("next-pwa")({
  dest: "public", // Destination directory for the PWA files
  disable: process.env.NODE_ENV === "development", // Disable PWA in development mode
  // runtimeCaching,
  exclude: [/app-build-manifest.json/],
  // buildExcludes: [
  //   /chunks\/images\/.*$/, // Don't precache files under .next/static/chunks/images this improves next-optimized-images behaviour
  //   /chunks\/pages\/api\/.*/, // Dont cache the API it needs fresh serverinfo
  // ],
  // exclude: [
  //   /\.map$/, // dont cache map files
  //   /^.*ts.*$/, // Dont let serviceworker touch the TS streams
  //   /-manifest.json$/, // exclude those pesky json files in _next root but still serve the ones we need from /_next/static
  // ],
  register: false, // Register the PWA service worker
  skipWaiting: true, // Skip waiting for service worker activation
  // fallbacks: {
  //   document: "/offline",
  // },
  cacheOnFrontEndNav: true,
  reloadOnOnline: true,
  extendDefaultRuntimeCaching: true,
});

// Export the combined configuration for Next.js with PWA support
module.exports = withPWA(nextConfig);
