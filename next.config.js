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
      {
        hostname: "img.freepik.comimg.freepik.com",
      },
    ],
  },
};

module.exports = nextConfig;
