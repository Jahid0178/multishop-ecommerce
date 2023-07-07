import { NextRequest, NextResponse } from "next/server";
import User from "@/libs/models/user.models";
export const POST = async (req: NextRequest, res: NextResponse) => {
  const body = await req.json();
  const { email, verificationToken } = body;
  return new NextResponse(JSON.stringify({ message: "Email verified", body }), {
    status: 200,
  });
  // try {
  //   // Find the user by email and verification token
  //   const user = await User.findOneAndUpdate(
  //     { email, verificationToken },
  //     { $set: { isVerified: true }, $unset: { verificationToken: 1 } },
  //     { new: true }
  //   );
  //   if (user) {
  //     return new NextResponse(
  //       JSON.stringify({ message: "Email verified", user }),
  //       { status: 200 }
  //     );
  //   } else {
  //     return new NextResponse(
  //       JSON.stringify({ message: "Invalid verification token" }),
  //       { status: 400 }
  //     );
  //   }
  // } catch (error: any) {
  //   return new NextResponse(
  //     JSON.stringify({
  //       message: "Invalid verification token",
  //       error: error.message,
  //     }),
  //     { status: 500 }
  //   );
  // }
};
