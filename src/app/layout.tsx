import Navbar from "@/components/navbar";
import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

/**
 * Call Manrope and Inter here to self host fonts, must be assigned to a variable
 */
const manrope = Manrope({
  subsets: ["latin"],
});
const inter = Inter({ subsets: ["latin"] });

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
        <div className="flex">
          <Navbar />
          <div className="w-full flex justify-center pl-[260px]">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
