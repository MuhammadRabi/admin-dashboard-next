import LandingNav from "@/components/LandingNav"

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center py-8 px-24">
      <LandingNav />
      <h1 className="text-6xl text-text-second font-bold">Yariga Home Page</h1>
    </main>
  )
}
