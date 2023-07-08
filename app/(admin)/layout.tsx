"use client";

import { DashboardFooter } from "@/ui/Dashboard";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body suppressHydrationWarning={true}>
        <div style={{ backgroundColor: "#FFFFFF" }}>{children}</div>
        <DashboardFooter />
      </body>
    </html>
  );
}
