import "./globals.css";
import type { Metadata } from "next";
import { Nunito, Roboto, Monoton, Figtree } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });

const josefin_Sans = Figtree({
  style: ["normal"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={josefin_Sans.className}>{children}</body>
    </html>
  );
}
