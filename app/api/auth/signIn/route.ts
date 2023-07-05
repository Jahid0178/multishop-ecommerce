import User from "@/libs/models";
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const secretKey = "your-secret-key"; // Change this to a secure secret key

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { username, password } = req.body;

    // Find the user in the database
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Verify the password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate access token
    const accessToken = jwt.sign({ username, role: user.role }, secretKey, {
      expiresIn: "15m",
    });

    // Generate refresh token
    const refreshToken = jwt.sign({ username }, secretKey, {
      expiresIn: "7d",
    });

    // Store the refresh token in the user document
    user.refreshToken = refreshToken;
    await user.save();

    // Set the access token as a cookie
    res.setHeader("Set-Cookie", `accessToken=${accessToken}; HttpOnly; Path=/`);

    // Return the access token as the response
    res.status(200).json({ accessToken });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}
