import { connectDB } from "@/libs/db";
import { UserModel } from "@/libs/models";
import bcrypt from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    try {
      await connectDB();
      const user = await UserModel.findOne({ email });

      if (!user || !bcrypt.compareSync(password, user.password)) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      // Create a session or token here and return it to the client

      res.status(200).json({ message: "Login successful" });
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  } else if (req.method === "GET") {
    connectDB();
    res.status(200).json({ message: "Login successful" });
  }
}
