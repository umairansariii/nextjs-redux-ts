import type { Metadata } from "next";
import StoreProvider from "./StoreProvider";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nextjs Redux",
  description: "A nextjs typescript project with redux toolkit",
};

const interFont = localFont({ src: "./fonts/InterVF.ttf" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={interFont.className}>{children}</body>
      </html>
    </StoreProvider>
  );
}
