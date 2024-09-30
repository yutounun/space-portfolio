import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "./components/main/StarBackground";
import Navbar from "./components/main/Navbar";
import Footer from "./components/main/Footer";

// Initialize the Inter font with any options if needed
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andrew Ichihara",
  description: "Space Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-x-hidden overflow-y-scroll`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
