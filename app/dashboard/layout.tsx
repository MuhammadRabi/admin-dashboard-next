import Nav from "@/components/navbar/Nav"
import Sidebar from "@/components/Sidebar"
import { getServerSession } from "next-auth"
import React from "react"
import { options } from "../../lib/options"

const layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(options)

  return (
    <div>
      <Nav user={session?.user} />
      <div className="flex">
        <Sidebar />
        <main className="w-5/6 bg-bg-color">{children}</main>
      </div>
    </div>
  )
}

export default layout
