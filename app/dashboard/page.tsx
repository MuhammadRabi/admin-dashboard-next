import Card from "@/components/Card"
import blueCircle from "../../public/assets/images/blue-circle.png"
import orangeCircle from "../../public/assets/images/orange-circle.png"
import pinkCircle from "../../public/assets/images/pink-circle.png"
import greenCircle from "../../public/assets/images/green-circle.png"
import LatestSales from "@/components/sales/LatestSales"
import PropertyWidget from "@/components/propertyWidget/PropertyWidget"
import PageHeading from "@/components/PageHeading"

const dashboard = () => {
  return (
    <section>
      <PageHeading title="dashboard" />
      <div className="page-wrapper">
        <Card
          title={"properties for sale"}
          count={624}
          circleImage={blueCircle}
        />
        <Card
          title={"properties for rent"}
          count={325}
          circleImage={orangeCircle}
        />
        <Card
          title={"total customers"}
          count={1120}
          circleImage={greenCircle}
        />
        <Card title={"total city"} count={24} circleImage={pinkCircle} />
        <PropertyWidget />
        <LatestSales />
      </div>
    </section>
  )
}

export default dashboard
