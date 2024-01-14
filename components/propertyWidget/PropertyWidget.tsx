import { propertyData } from "@/constants"
import WidgetTitle from "../WidgetTitle"
import PropertyCard from "./PropertyCard"
import Image from "next/image"
import arrow from "../../public/assets/icons/arrow.svg"

const PropertyWidget = () => {
  return (
    <section className="col-span-full widget">
      <WidgetTitle title="property list" />
      <div className="flex">
        <div className="grid grid-cols-1 mx-auto lg:mx-0 lg:grid-cols-3 gap-6 mt-5 w-full lg:w-5/6">
          {propertyData.map((item) => (
            <PropertyCard key={item.title} {...item} />
          ))}
        </div>
        {/* not finished */}
        <div className="w-1/6">
          <div className="rounded-full shadow-md w-5 p-4">
            <Image src={arrow} width={24} alt="arrow" />
          </div>
        </div>
        {/* not finished */}
      </div>
    </section>
  )
}

export default PropertyWidget
