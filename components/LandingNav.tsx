import { options } from "@/lib/options"
import { getServerSession } from "next-auth"
import Link from "next/link"
import React from "react"

const LandingNav = async () => {
  const session = await getServerSession(options)

  return (
    <div className="flex items-center space-x-4 justify-end w-full">
      <Link href={"/dashboard"}>Dashboard</Link>

      {session ? (
        <Link
          href="/api/auth/signout?callbackUrl=/"
          className="bg-primary text-white px-4 py-2 rounded-lg"
        >
          Logout
        </Link>
      ) : (
        <Link
          href="/api/auth/signin?callbackUrl=/dashboard"
          className="bg-primary text-white px-4 py-2 rounded-lg"
        >
          Login
        </Link>
      )}
    </div>
  )
}

export default LandingNav
