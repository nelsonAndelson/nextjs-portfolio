import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/next';
import { Jost } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nelson Baguma",
  description: "My Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jost.className}>
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
