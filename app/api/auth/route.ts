import { NextResponse } from "next/server";
//CLIENT ID= 843449219022-6kpuj8k0p4bo3lqnmhv4hmsdqq006e1r.apps.googleusercontent.com
//CLIENT SECRET= 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

//PROJECT LINK https://console.cloud.google.com/apis/credentials?project=junaid012
export async function GET() {
  // Do whatever you want
  return NextResponse.json({ message: "Hello World" }, { status: 200 });
}
