import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
import User, { UserDocument } from "@/libs/models/user.models";
import bcrypt from "bcrypt";
import { connectDB } from "@/libs/db";

export const GET = async (req: NextRequest, res: NextResponse) => {
  //   redirect(process.env.APP_PUBLIC_API ?? "");
  return new NextResponse(JSON.stringify({ mm: "signUp" }));
};
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

    // Create a new user
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role,
    });
    const user = await newUser.save();
    if (user) {
      return new NextResponse(
        JSON.stringify({ message: "Registration successful", user: user }),
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
