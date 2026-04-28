import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Frontend developer portfolio showcasing projects, skills, and experience.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#0a0f1e] text-white antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}