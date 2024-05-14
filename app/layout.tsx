import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "amatatsu",
  description: "amatatsu's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <head>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Cutive+Mono&family=Lobster+Two&family=Noto+Sans+JP&family=Noto+Serif+JP:wght@200&family=Philosopher&family=Zen+Kaku+Gothic+New&display=swap" rel="stylesheet"/>
    </head>
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </>
  );
}
