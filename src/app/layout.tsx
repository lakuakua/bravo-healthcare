import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { UtilityBar } from "@/components/layout/UtilityBar";
import { company } from "@/data/company";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bravohcs.com"),
  title: {
    default: "Bravo Healthcare | Compassionate Care at Home",
    template: "%s | Bravo Healthcare",
  },
  description: company.description,
  openGraph: {
    title: "Bravo Healthcare | Compassionate Care at Home",
    description: company.description,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white font-sans text-text-dark">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <UtilityBar />
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
