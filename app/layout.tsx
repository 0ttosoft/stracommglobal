import React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import FloatingButtons from "@/components/floating-buttons"

import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Stracomm Global | Strategic Branding & Experiential Campaign Consultants",
  description:
    "Stracomm Global - Premier event management, wedding planning, corporate events, and experiential campaign consultants. Creating unforgettable experiences.",
  keywords:
    "event management, wedding planning, corporate events, birthday party, stracomm global, event planner India",
  icons: {
    icon: "/images/logo-dark.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        {children}
        <FloatingButtons />
      </body>
    </html>
  )
}
