import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import ThemeProvider from "@/components/ThemeProvider";
import Script from "next/script";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Befit Nutrition - Best Nutrition",
  description:
    "Nutrition for a better life. Shop our high-quality protein bars and supplements to fuel your fitness journey. Fast shipping and great customer service.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* No-flash theme: apply class before React mounts */}
        <Script id="theme-init" strategy="beforeInteractive">
          {`
(function () {
  try {
    var stored = localStorage.getItem("theme");
    // zustand persist stores JSON; we read theme from that object
    var theme = "system";
    if (stored) {
      var parsed = JSON.parse(stored);
      theme = parsed?.state?.theme || "system";
    }
    var isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
    if (isDark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  } catch (e) {}
})();
          `}
        </Script>
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider />

        <div className="mx-auto p-4 sm:px-0 sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-6xl">
          <Navbar />
          {children}
          <Footer />
        </div>

        <ToastContainer position="bottom-right" />
      </body>
    </html>
  );
}
