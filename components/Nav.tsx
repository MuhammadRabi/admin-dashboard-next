"use client"

import Image from "next/image"
import logo from "../public/assets/images/logo.png"
import search from "../public/assets/icons/search.svg"
import notification from "../public/assets/icons/notification.svg"
import avatar from "../public/assets/images/profile-image.png"
import { usePathname, useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"

const Nav = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { replace } = useRouter()

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams)
    params.set("query", e.target.value)
    replace(`${pathname}?${params}`)
  }

  return (
    <section className="h-[70px] sticky top-0 flex-between px-5 bg-white">
      <div className="flex gap-1 items-center">
        <Image src={logo} width={34.5} height={38.5} alt="logo" />
        <span className="font-bold text-2xl">Yariga</span>
      </div>
      <div className="flex rounded-lg justify-center px-2 items-center bg-bg-color w-[450px]">
        <Image
          src={search}
          width={14}
          height={14}
          alt="search-icon"
          className="cursor-pointer"
        />
        <input
          type="text"
          className="input-control w-96"
          placeholder="search property, customers, etc"
          onChange={handleSearch}
        />
      </div>
      <div className="flex gap-5">
        <Image
          src={notification}
          width={24}
          height={24}
          alt="notification-bell"
          className="cursor-pointer"
        />
        <div className="flex items-center gap-2.5 cursor-pointer">
          <div className="avatar">
            <Image
              src={avatar}
              width={40}
              height={40}
              alt="notification-bell"
              className="rounded-full"
            />
          </div>
          <div>
            <h2 className="text-sm font-semibold text-text-primary">
              Muhammad Rabi
            </h2>
            <h3 className="text-xs text-text-second">CEO of company</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Nav
