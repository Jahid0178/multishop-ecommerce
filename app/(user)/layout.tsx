/* eslint-disable react/jsx-no-duplicate-props */
"use client";
import "react-toastify/dist/ReactToastify.css";

import store from "@/redux/store";
import Footer from "@/ui/Footer";
import Header from "@/ui/Header";
import { MantineProvider } from "@mantine/core";
import { useSpring } from "@react-spring/web";
import { Nunito } from "next/font/google";
import { useState } from "react";
import { Provider } from "react-redux";
import ".././globals.css";
import NextTopLoader from "nextjs-toploader";
import { ToastContainer } from "react-toastify";

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
          <NextTopLoader height={3} showSpinner={false} />
          <Provider store={store}>
            <ToastContainer />

            <Header />
            <main>{children}</main>
            <Footer />
          </Provider>
        </body>
      </MantineProvider>
    </html>
  );
}
