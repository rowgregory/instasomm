import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./animations.css";
import PageWrapper from "./page-wrapper";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Insta-Somm",
  description:
    "Curated Wine Recommendations Tailored to Your Unique Taste Preferences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={<></>}>
          <PageWrapper>{children}</PageWrapper>
        </Suspense>
      </body>
    </html>
  );
}
