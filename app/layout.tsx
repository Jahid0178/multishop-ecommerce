"use client";

import { MantineProvider } from "@mantine/core";
import "./globals.css";
import { Nunito } from "next/font/google";
import Footer from "@/ui/Footer";
import Header from "@/ui/Header";
import { useSpring } from "@react-spring/web";
import { useState } from "react";
import { Provider, useDispatch } from "react-redux";
import { AppProps } from "next/app";
import store, { AppDispatch } from "@/redux/store";
import { openShoppingCartOpen } from "@/redux/shoppingCartSlice";
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
          <Provider store={store}>
            <Header />
            <main>{children}</main>
            <Footer />
          </Provider>
        </body>
      </MantineProvider>
    </html>
  );
}
