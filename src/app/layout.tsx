import Navbar from "@/components/navbar";
import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import NavbarMobile from "@/components/navbar-mobile";

/**
 * Call Manrope and Inter here to self host fonts, must be assigned to a variable
 */
const manrope = Manrope({
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gaurav Varma",
  description: "Gaurav Varma Full Stack Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className} antialiased cursor-default`}>
        <Toaster
          position="bottom-center"
          toastOptions={{
            className: "text-sm text-foreground cursor-default",
            duration: 3000,
          }}
        />
        <div className="flex">
          <Navbar />
          <NavbarMobile />
          <div className="w-full flex justify-center pt-[71.05px] lg:pt-0 lg:pl-[260px]">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
