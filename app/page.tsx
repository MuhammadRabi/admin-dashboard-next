import { getServerSession } from "next-auth"
import Link from "next/link"
import { options } from "../lib/options"

export default async function Home() {
  const session = await getServerSession(options)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl text-text-second font-bold">Yariga Home Page</h1>
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
          href="/api/auth/signin"
          className="bg-primary text-white px-4 py-2 rounded-lg"
        >
          Login
        </Link>
      )}
    </main>
  )
}
