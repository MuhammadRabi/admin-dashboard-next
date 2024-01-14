import PageHeading from "@/components/PageHeading"
import LatestSales from "@/components/sales/LatestSales"
import React from "react"

const propertyPage = () => {
  return (
    <section>
      <PageHeading title="property" />
      <div className="page-wrapper">
        <LatestSales />
      </div>
    </section>
  )
}

export default propertyPage
