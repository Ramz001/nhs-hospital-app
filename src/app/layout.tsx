import type { Metadata } from "next";
import { Geist, Geist_Mono, DM_Sans } from "next/font/google";
import "./globals.css";
import RootProvider from "@/providers/root.provider";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "NHS Hospital App",
  description: "A hospital management app for nurses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="antialiased">
        <main className="max-w-lg w-full justify-center items-center mx-auto safe-areas">
          <RootProvider>{children}</RootProvider>
        </main>
      </body>
    </html>
  );
}
