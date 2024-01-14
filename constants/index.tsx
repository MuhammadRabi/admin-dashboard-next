// Import SVG files
import DashboardIcon from "../public/assets/icons/dashboard.svg"
import BuildingIcon from "../public/assets/icons/building.svg"
import PersonIcon from "../public/assets/icons/person.svg"
import StarIcon from "../public/assets/icons/star.svg"
import MessageIcon from "../public/assets/icons/message.svg"
import ProfileIcon from "../public/assets/icons/profile.svg"
import LocationIcon from "../public/assets/icons/location.png"
import sales01 from "../public/assets/images/sales-01.jpg"
import sales02 from "../public/assets/images/sales-02.jpg"
import sales03 from "../public/assets/images/sales-03.jpg"
import sales04 from "../public/assets/images/sales-04.jpg"
import propertyOne from "../public/assets/images/propertyone.jpg"
import propertyTwo from "../public/assets/images/propertytwo.jpg"
import propertyThree from "../public/assets/images/propertythree.jpg"
import { ChatBubbleIcon } from "@radix-ui/react-icons"

export const sideLinks = [
  {
    title: "dashboard",
    icon: <ChatBubbleIcon />,
    path: "/dashboard",
  },
  // {
  //   title: "property",
  //   icon: BuildingIcon,
  //   path: "/property",
  // },
  // {
  //   title: "agent",
  //   icon: PersonIcon,
  //   path: "/agent",
  // },
  // {
  //   title: "review",
  //   icon: StarIcon,
  //   path: "/review",
  // },
  // {
  //   title: "message",
  //   icon: MessageIcon,
  //   path: "/message",
  // },
  // {
  //   title: "my profile",
  //   icon: ProfileIcon,
  //   path: "/profile",
  // },
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
