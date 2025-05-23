import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
const proximaNova = localFont({
  src: "./fonts/ProximaNova.ttf",
  variable: "--font-proxima-nova",
  weight: "100 900",
});

export const metadata: Metadata = {
  icons: "./logo.png",
  title: "Simbian",
  description: "Generated by create next 14 app for Simbian task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${proximaNova.variable}  antialiased`}>{children}</body>
    </html>
  );
}
