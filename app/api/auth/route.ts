// Step 3: Implement User Registration and Login (using Next.js API routes)
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import cookie from "cookie";
import User from "@/libs/models/user.models";

export const POST = async (req: NextRequest, res: NextResponse) => {
  const { name, email, password, role } = req.body;

  try {
    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Create a new user
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword, role });
    await newUser.save();

    res.status(200).json({ message: "Registration successful" });
  } catch (error) {
    res.status(500).json({ message: "Registration failed" });
  }
};
export const GET = async (req: NextRequest, res: NextResponse) => {
  return new NextResponse(JSON.stringify({ mm: "nnkjkjbkjb" }));
};
