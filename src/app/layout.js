"use client";
import Navbar from "@/components/navbar";
import "./globals.css";
import { Inter, Montserrat } from "next/font/google";
import Footer from "@/components/footer";
import ContactUs from "@/components/contact-us";

import React, { useState, useEffect, useRef } from "react";

import { usePathname } from "next/navigation";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export default function RootLayout({ children }) {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const contactRef = useRef(null);

  const pathname = usePathname();
  useEffect(() => {
    setExpandNavbar(false);
  }, [pathname]);

  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body
        className={`flex min-h-screen flex-col bg-custom-soft-black ${expandNavbar ? "overflow-hidden" : ""}`}
      >
        <Navbar expandNavbar={expandNavbar} setExpandNavbar={setExpandNavbar} contactRef={contactRef} />
        {children}
        <ContactUs ref={contactRef} />
        <Footer />
      </body>
    </html>
  );
}