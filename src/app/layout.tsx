import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Doo-jjon-ku | 두바이 쫀득 쿠키",
  description: "한국에서 가장 트렌디한 두바이 쫀득 쿠키와 두바이 쫀득 치킨을 만나보세요.",
};

import { CartProvider } from "@/context/CartContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={`${inter.variable} font-sans`}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
