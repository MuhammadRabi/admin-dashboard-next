import React from "react"

type PageHeadingProps = {
  title: string
}

const PageHeading = ({ title }: PageHeadingProps) => {
  return (
    <h1 className="text-lg capitalize px-6 pt-6 font-semibold lg:font-bold lg:text-2xl">
      {title}
    </h1>
  )
}

export default PageHeading
