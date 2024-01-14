import Image from "next/image"
import SaleItem from "./SaleItem"
import arrow from "../../public/assets/icons/arrow.svg"
import { salesData } from "@/constants/index"
import WidgetTitle from "../WidgetTitle"

const LatestSales = () => {
  return (
    <section className="widget col-span-full max-w-sm lg:col-span-4 h-96">
      <header className="flex-between mb-5">
        <WidgetTitle title={"latest sales"} />
        <Image src={arrow} width={15} height={15} alt="arrow-icon" />
      </header>
      {salesData.map((s) => (
        <SaleItem key={s.title} {...s} />
      ))}
    </section>
  )
}

export default LatestSales
