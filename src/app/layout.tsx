import Sidebar from "@/components/sidebar";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
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
        <div className="flex">
          <Sidebar />
          <div className="flex flex-col items-center justify-center h-screen">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
