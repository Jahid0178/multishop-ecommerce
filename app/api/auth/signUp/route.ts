import { NextRequest, NextResponse } from "next/server";
import User, { UserDocument } from "@/libs/models/user.models";
import bcrypt from "bcrypt";
import { connectDB } from "@/libs/db";
import { sendVerificationEmail } from "@/libs/email";
import { v4 as uuidv4 } from "uuid";

export const POST = async (req: NextRequest, res: NextResponse) => {
  connectDB();

  const body: UserDocument = await req.json();

  const { name, email, password, role } = body;
  try {
    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new NextResponse(
        JSON.stringify({ message: "Email already exists" }),
        { status: 400 }
      );
    }

    // Generate a verification token
    const verificationToken = uuidv4();

    // Create a new user
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role,
      verificationToken,
    });
    const user = await newUser.save();
    if (user) {
      sendVerificationEmail(user.email, user.verificationToken);

      return new NextResponse(
        JSON.stringify({ message: "Registration successful", user }),
        {
          status: 200,
        }
      );
    }
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        message:
          process.env.NODE_ENV === "production"
            ? "Registration failed"
            : error.message,
      }),
      { status: 500 }
    );
  }
};
