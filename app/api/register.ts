import { connectDB } from "@/libs/db";
import { UserModel } from "@/libs/models";
import bcrypt from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email, name, password } = req.body;

    try {
      await connectDB();
      const existingUser = await UserModel.findOne({ email });

      if (existingUser) {
        return res.status(400).json({ message: "Email already exists" });
      }

      const hashedPassword = bcrypt.hashSync(password, 10);

      const newUser = await UserModel.create({
        email,
        name,
        password: hashedPassword,
      });

      res
        .status(201)
        .json({ message: "User created successfully", user: newUser });
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  }
}
