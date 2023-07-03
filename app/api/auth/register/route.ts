import User from "@/libs/models";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import { connectDB } from "../../../../libs/db";

export const POST = async (request: {
  json: () =>
    | PromiseLike<{ name: any; email: any; password: any }>
    | { name: any; email: any; password: any };
}) => {
  const { name, email, password } = await request.json();

  await connectDB();

  const hashedPassword = await bcrypt.hash(password, 5);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    return new NextResponse("User has been created", {
      status: 201,
    });
  } catch (err: any) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};
