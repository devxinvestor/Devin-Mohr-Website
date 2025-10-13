import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Devin Mohr | Investment Banking Analyst",
  description:
    "Investment Banking M&A Analyst at Wells Fargo. M.S. Finance & B.S. Computer Science from University of Florida. Specializing in mergers & acquisitions, valuation, and quantitative analysis.",
  keywords: [
    "Devin Mohr",
    "Investment Banking",
    "M&A",
    "Wells Fargo",
    "Finance",
    "University of Florida",
    "Valuation",
    "Financial Analysis",
  ],
  authors: [{ name: "Devin Mohr" }],
  openGraph: {
    title: "Devin Mohr | Investment Banking Analyst",
    description: "Investment Banking M&A Analyst at Wells Fargo",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Devin Mohr | Investment Banking Analyst",
    description: "Investment Banking M&A Analyst at Wells Fargo",
  },
  icons: {
    icon: "/favicon.ico",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
