import React from "react"

type widgetTitleProp = {
  title: string
}

const WidgetTitle = ({ title }: widgetTitleProp) => {
  return <h2 className="capitalize text-lg font-semibold">{title}</h2>
}

export default WidgetTitle
