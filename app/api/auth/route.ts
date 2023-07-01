import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "../../../libs/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    console.log("called");
    try {
      await connectDB();

      res.status(201).json({ message: "User created successfully" });
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  }
}
