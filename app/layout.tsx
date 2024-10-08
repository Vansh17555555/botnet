import type { Metadata } from "next";
//import { Inter } from "next/font/google";
import { Manrope } from 'next/font/google'
import "./globals.css";
import { cn } from '@/lib/utils'
const fontHeading = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})
const fontBody = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: "BOTNET",
  description: "CSI BOTNET ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
          'antialiased',
          fontHeading.variable,
          fontBody.variable
  )}>{children}</body>
    </html>
  );
}
