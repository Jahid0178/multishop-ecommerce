import { connectDB } from "@/libs/db";
import { UserModel } from "@/libs/models";
import bcrypt from "bcrypt";
import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "john.doe@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connectDB();
        const user = await UserModel.findOne({ email: credentials.email });

        if (user && bcrypt.compareSync(credentials.password, user.password)) {
          // Existing user with email/password
          return user;
        }

        return null;
      },
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_ClIENT_SECRET,
    }),
  ],
  database: process.env.MONGODB_URI,
  secret: process.env.AUTH_SECRET,
  callbacks: {
    async signIn(user: { email: any }, account: { provider: string }) {
      if (account.provider === "google") {
        // Check if the user exists in the database
        await connectDB();
        const existingUser = await UserModel.findOne({ email: user.email });
        if (existingUser) {
          return true;
        } else {
          // Create a new user in the database
          await UserModel.create({ email: user.email });
          return true;
        }
      }
      return false;
    },
  },
});
