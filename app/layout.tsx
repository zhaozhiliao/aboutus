import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "About Guazi - China's Premier Automotive Trading Platform",
  description: "Founded in 2015, Guazi has evolved into China's premier automotive trading platform, connecting millions of buyers and sellers worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
