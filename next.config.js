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
  //   disable: process.env.NODE_ENV === "development", // Disable PWA in development mode
  disable: false,
//   runtimeCaching,
//   buildExcludes: [
//     /chunks\/images\/.*$/, // Don't precache files under .next/static/chunks/images this improves next-optimized-images behaviour
//     /chunks\/pages\/api\/.*/, // Dont cache the API it needs fresh serverinfo
//   ],
//   exclude: [
//     /\.map$/, // dont cache map files
//     /^.*ts.*$/, // Dont let serviceworker touch the TS streams
//     /-manifest.json$/, // exclude those pesky json files in _next root but still serve the ones we need from /_next/static
//   ],
  register: false, // Register the PWA service worker
  skipWaiting: true, // Skip waiting for service worker activation
  fallbacks: {
    document: "/offline",
  },
  cacheOnFrontEndNav: true,
});

// Export the combined configuration for Next.js with PWA support
module.exports = withPWA(nextConfig);
