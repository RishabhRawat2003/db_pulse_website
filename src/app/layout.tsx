import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "DbPulse – Database Query Monitoring & API Tracking",
  description: "Track every SQL/NoSQL query, execution time, API correlation. For MongoDB, PostgreSQL, MySQL. Desktop app + agent.",
   icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased scroll-smooth`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}