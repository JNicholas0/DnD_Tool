import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextAuthProvider } from "@_index"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Welcome to DnD Tool",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NextAuthProvider>
      <html data-theme="autumn">
        <body className={inter.className}>{children}</body>
      </html>
    </NextAuthProvider>
  );
}
