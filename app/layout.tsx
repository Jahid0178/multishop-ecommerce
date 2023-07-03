"use client";

import store from "@/redux/store";
import Footer from "@/ui/Footer";
import Header from "@/ui/Header";
import { MantineProvider } from "@mantine/core";
import { useSpring } from "@react-spring/web";
import { Nunito } from "next/font/google";
import { useState } from "react";
import { Provider } from "react-redux";
import AuthProviders from "../libs/providers/AuthProviders";
import "./globals.css";
const nunito = Nunito({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const cartAnimation = useSpring({
    transform: isOpen ? "translateX(0)" : "translateX(100%)",
  });

  const handleToggleCart = () => {
    setIsOpen(!isOpen);
  };
  // openShoppingCartOpen

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
          <AuthProviders>
          <Provider store={store}>
            <Header />
            <main>{children}</main>
            <Footer />
          </Provider>
          </AuthProviders>
        </body>
      </MantineProvider>
    </html>
  );
}
