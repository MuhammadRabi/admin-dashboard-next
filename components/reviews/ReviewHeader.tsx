import Image from "next/image"
import React from "react"
import avatar from "../../public/assets/images/user-one.jpg"

const ReviewHeader = () => {
  return (
    <header className="flex basis-1/4 gap-4">
      <Image
        src={avatar}
        width={70}
        height={70}
        alt="avatar"
        className="object-cover rounded-[10px]"
      />
      Lore fugiat
    </header>
  )
}

export default ReviewHeader
