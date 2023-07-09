"use client";

import { DashboardFooter, DashboardHeader } from "@/ui/Dashboard";
import NextTopLoader from "nextjs-toploader";
import "./global.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body suppressHydrationWarning={true}>
        <NextTopLoader height={3} showSpinner={false} />

        <DashboardHeader />

        <div style={{ backgroundColor: "#FFFFFF" }}>{children}</div>
        <DashboardFooter />
      </body>
    </html>
  );
}
