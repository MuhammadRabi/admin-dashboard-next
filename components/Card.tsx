import Image, { StaticImageData } from "next/image"
import React from "react"

type CardProps = {
  title: string
  count: number
  circleImage: string | StaticImageData
}

const Card = ({ title, count, circleImage }: CardProps) => {
  return (
    <div className="widget h-28 col-span-full max-w-xs lg:col-span-3 flex justify-around items-center gap-3">
      <div className="details">
        <h3 className="text-text-second text-sm capitalize">{title}</h3>
        <span className="font-bold text-xl mt-2 text-text-primary block">
          {count}
        </span>
      </div>
      <Image
        src={circleImage}
        className="object-cover"
        width={60}
        height={60}
        alt={`${title} circle`}
      />
    </div>
  )
}

export default Card
