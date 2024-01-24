import PageHeading from "@/components/PageHeading"
import ReviewWrapper from "@/components/reviews/ReviewWrapper"
import React from "react"

const reviewPage = () => {
  return (
    <section>
      <PageHeading title="review list" />
      <div className="page-wrapper">
        <div className="col-span-full">
          <ReviewWrapper />
          <ReviewWrapper />
        </div>
      </div>
    </section>
  )
}

export default reviewPage
