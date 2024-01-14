import React from "react"
import Image, { StaticImageData } from "next/image"

type salesItemProps = {
  title: string
  subtitle: string
  price: number
  image: StaticImageData
}

const SaleItem = ({ title, subtitle, price, image }: salesItemProps) => {
  return (
    <article className="wrapper flex-between mb-5">
      <div className="item flex gap-2.5">
        <Image src={image} width={60} height={55} alt={""} />
        <div className="details">
          <h3 className="heading">{title}</h3>
          <h4 className="sub-heading">{subtitle} </h4>
        </div>
      </div>
      <div className="price text-[#2F80ED] font-bold">+${price}</div>
    </article>
  )
}

export default SaleItem
