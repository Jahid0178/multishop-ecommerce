"use client";

import { MantineProvider } from "@mantine/core";
import "./globals.css";
import { Nunito } from "next/font/google";
import Footer from "@/ui/Footer";
import Header from "@/ui/Header";

const nunito = Nunito({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          globalStyles: (theme) => ({
            body: {
              backgroundColor: "#EDF2FD",
            },
            section: {
              padding: "3rem 0",
            },
          }),
        }}
      >
        <body className={nunito.className} suppressHydrationWarning={true}>
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </MantineProvider>
    </html>
  );
}
