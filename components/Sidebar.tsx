"use client"
import Image from "next/image"
import { sideLinks } from "@/constants/index"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Sidebar = () => {
  const pathname = usePathname()
  return (
    <aside className="bg-main hidden sticky top-20 lg:block h-full w-1/6 pt-2 px-4">
      <ul>
        {sideLinks.map((link) => (
          <Link href={link.path} key={link.title}>
            <li
              className={`flex gap-4 items-center mb-0.5 text-text-second hover:text-white p-4 hover:bg-primary rounded-xl duration-300 capitalize font-semibold text-base ${
                pathname === link.path ? "text-white bg-primary" : " "
              }`}
            >
              {/* <Image src={link.icon} width={24} height={24} alt={link.title} /> */}
              <div className="text-3xl">{link.icon}</div>
              {link.title}
            </li>
          </Link>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar
