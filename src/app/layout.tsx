import type { Metadata } from "next";
import { Figtree, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";

const figtree = Figtree({ subsets: ["latin"], variable: "--font-figtree" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

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
      <body className={`${figtree.variable} ${fraunces.variable} ${jetbrains.variable} font-sans antialiased scroll-smooth`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}