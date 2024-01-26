// Import SVG files
import LocationIcon from "../public/assets/icons/location.png"
import sales01 from "../public/assets/images/sales-01.jpg"
import sales02 from "../public/assets/images/sales-02.jpg"
import sales03 from "../public/assets/images/sales-03.jpg"
import sales04 from "../public/assets/images/sales-04.jpg"
import propertyOne from "../public/assets/images/propertyone.jpg"
import propertyTwo from "../public/assets/images/propertytwo.jpg"
import propertyThree from "../public/assets/images/propertythree.jpg"
import { RxDashboard } from "react-icons/rx"
import { RxAvatar } from "react-icons/rx"
import { RxPerson } from "react-icons/rx"
import { RxStar } from "react-icons/rx"
import { RxEnvelopeClosed } from "react-icons/rx"
import { RxArchive } from "react-icons/rx"

export const sideLinks = [
  {
    title: "dashboard",
    icon: <RxDashboard />,
    path: "/dashboard",
  },
  {
    title: "property",
    icon: <RxArchive />,
    path: "/dashboard/property",
  },
  {
    title: "agent",
    icon: <RxPerson />,
    path: "/dashboard/agent",
  },
  {
    title: "review",
    icon: <RxStar />,
    path: "/dashboard/review",
  },
  {
    title: "message",
    icon: <RxEnvelopeClosed />,
    path: "/dashboard/message",
  },
  {
    title: "my profile",
    icon: <RxAvatar />,
    path: "/dashboard/profile",
  },
]

export const salesData = [
  {
    title: "Metro Jayakar Apartment",
    subtitle: "North Carolina, USA",
    price: 75,
    image: sales01,
  },
  {
    title: "Letdo Ji Hotel & Aportment",
    subtitle: "Carolina North, UK",
    price: 15,
    image: sales02,
  },
  {
    title: "Star Sun Hotel & Apartment",
    subtitle: "Cairo, Egypt",
    price: 35,
    image: sales03,
  },
  {
    title: "Ritz Hotel",
    subtitle: "Paris, France",
    price: 45,
    image: sales04,
  },
]

export const propertyData = [
  {
    title: "Metro Jayakar Apartment",
    subtitle: "North Carolina, USA",
    price: 500,
    image: propertyOne,
  },
  {
    title: "Letdo Ji Hotel & Aportment",
    subtitle: "Carolina North, UK",
    price: 150,
    image: propertyTwo,
  },
  {
    title: "Star Sun Hotel & Apartment",
    subtitle: "Cairo, Egypt",
    price: 350,
    image: propertyThree,
  },
]
