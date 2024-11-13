import type { Metadata } from "next";
import localFont from "next/font/local";
import "./styles/globals.css";
import RootTemplate from "@/app/template";

const geistSans = localFont({
  src: "../../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../../public/fonts/GeistVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Leontiev Challenge",
  description: "Create by Kirill Leontiev",
};

export default function RootLayout({children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
    <RootTemplate>{children}</RootTemplate>
    </body>
    </html>
  );
}
