/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GOOGLE_CLIENT_ID:
      "730045175339-4c6m0ed0n70hplmbjufqvundigr24jaq.apps.googleusercontent.com",
    GOOGLE_ClIENT_SECRET: "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",

    MONGODB_URI:
      "mongodb+srv://abbas:Fkoi3CIZxbDxKJWw@cluster0.whoksax.mongodb.net/multy_shop?retryWrites=true&w=majority",
    AUTH_SECRET: "multy_shop_dev_junaid_super_secret!",
    BASE_URL:
      process.env.NODE_ENV === "production"
        ? "https://multishop-ecommerce-pduj.vercel.app/"
        : "http://localhost:3000",
    GOOGLE_CLIENT_SECRET: "hello_multyShop_google_client",
    APP_PUBLIC_API:
      process.env.NODE_ENV === "production"
        ? "https://multishop-ecommerce-pduj.vercel.app/"
        : "http://localhost:3000/",

    //EMAIL_PROVIDER_ENV
    HOST_EMAIL: "hire.developerjunaid@gmail.com",
    HOST_PASSWORD: "cumjnnvdemixhdan",
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
