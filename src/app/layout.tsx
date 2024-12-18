import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Career | Find one now",
  description: "Career is an online job portal where user can find their suitable job or can find a talent for their business seamlessly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-jakarta antialiased bg-accent`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
