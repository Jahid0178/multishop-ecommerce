/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "www.istorebangladesh.com",
      },
      {
        hostname: "m.media-amazon.com",
      },
    ],
  },
};

module.exports = nextConfig;
