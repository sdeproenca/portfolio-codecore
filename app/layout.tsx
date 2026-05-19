import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sofi de Proença · Product, Project & Operations Manager",
  description:
    "Operations and product strategist. Web3, ecommerce, public-sector tech. Based between Buenos Aires and Milan.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jetbrains.variable}>
      <body className="min-h-screen bg-ink text-bone">{children}</body>
    </html>
  );
}
