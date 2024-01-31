import React from "react"
import Image from "next/image"
import { userProps } from "@/types/types"

const UserCard = ({ user }: userProps) => {
  return (
    <div className="flex items-center gap-2.5 cursor-pointer">
      <div className="avatar">
        <Image
          src={user?.image!}
          width={40}
          height={40}
          alt="notification-bell"
          className="rounded-full"
        />
      </div>
      <div>
        <h2 className="text-sm font-semibold text-text-primary">
          {user?.name}
        </h2>
        <h3 className="text-xs text-text-second">CEO of company</h3>
      </div>
    </div>
  )
}

export default UserCard
