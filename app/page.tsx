import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl text-text-second font-bold">Yariga Home Page</h1>
      <Link href={"/dashboard"}>Dashboard</Link>
    </main>
  )
}
