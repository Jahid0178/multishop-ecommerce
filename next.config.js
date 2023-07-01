/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GOOGLE_CLIENT_ID:
      "843449219022-6kpuj8k0p4bo3lqnmhv4hmsdqq006e1r.apps.googleusercontent.com",
    GOOGLE_ClIENT_SECRET: "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",
    MONGODB_URI:
      "mongodb+srv://abbas:Fkoi3CIZxbDxKJWw@cluster0.whoksax.mongodb.net/multy_shop?retryWrites=true&w=majority",
    AUTH_SECRET: "multy_shop_dev_junaid_super_secret!",
  },
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
