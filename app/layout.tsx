import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "/styles/globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Devin Mohr",
  description:
    "Master of Science in Finance Student at the University of Florida",
  keywords: [
    "Devin Mohr",
    "Investment Banking",
    "M&A",
    "Finance",
    "University of Florida",
    "Valuation",
    "Financial Analysis",
  ],
  authors: [{ name: "Devin Mohr" }],
  openGraph: {
    title: "Devin Mohr",
    description: "Master of Science in Finance Student at the University of Florida",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/Devin-Mohr.png",
        width: 1200,
        height: 630,
        alt: "Devin Mohr",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Devin Mohr",
    description: "Master of Science in Finance Student at the University of Florida",
    images: ["/images/Devin-Mohr.png"],
  },
  icons: {
    icon: "/images/Devin-Mohr.png",
    apple: "/images/Devin-Mohr.png",
    shortcut: "/images/Devin-Mohr.png",
  },
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