import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { limiter } from "@/app/api/limiter";
export const GET = async (req: NextRequest, res: NextResponse) => {
  //   redirect(process.env.APP_PUBLIC_API ?? "");
  req.headers.append("origin", req.nextUrl.pathname);
  const origin = req.headers.get("origin");
  const remaining = await limiter.removeTokens(1);
  if (remaining < 0) {
    return new NextResponse(null, {
      status: 429,
      statusText: "Too many request",
      headers: {
        "Access-Control-Allow-Origin": origin || "*",
        "Content-Type": "text/plain",
      },
    });
  }

  return new NextResponse(JSON.stringify({ mm: remaining }));
};
