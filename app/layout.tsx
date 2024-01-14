import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Sidebar from "@/components/Sidebar"
import Nav from "@/components/Nav"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Yargia",
  description: "Real estate",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Nav />
        <div className="flex">
          <Sidebar />
          <main className="w-5/6 bg-bg-color">{children}</main>
        </div>
      </body>
    </html>
  )
}
