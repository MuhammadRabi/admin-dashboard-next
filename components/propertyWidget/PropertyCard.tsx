import Image, { StaticImageData } from "next/image"
import React from "react"
import propertyImage from "../../public/assets/images/propertyone.jpg"
import { PaperPlaneIcon } from "@radix-ui/react-icons"

type propertyCardProps = {
  title: string
  subtitle: string
  price: number
  image: StaticImageData
}

const PropertyCard = ({ title, subtitle, image, price }: propertyCardProps) => {
  return (
    <figure>
      <Image
        src={image}
        width={329}
        height={186}
        alt="propertyimg"
        className="rounded-[10px] object-cover"
      />
      <figcaption className="flex-between mt-2.5">
        <div>
          <h3 className="heading">{title}</h3>
          <div className="flex justify-start items-center gap-2">
            <PaperPlaneIcon className="text-black" />
            <h4 className="sub-heading">{subtitle}</h4>
          </div>
        </div>
        <div className="price text-xs bg-secondary self-start font-semibold text-primary py-1.5 px-2 rounded-md ">
          ${price}
        </div>
      </figcaption>
    </figure>
  )
}

export default PropertyCard
