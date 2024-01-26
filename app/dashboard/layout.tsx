import Nav from "@/components/Nav"
import Sidebar from "@/components/Sidebar"
import React from "react"

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Nav />
      <div className="flex">
        <Sidebar />
        <main className="w-5/6 bg-bg-color">{children}</main>
      </div>
    </div>
  )
}

export default layout
