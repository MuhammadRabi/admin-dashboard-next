import PageHeading from "@/components/PageHeading"
import ReviewBox from "@/components/reviews/ReviewBox"
import React from "react"

const reviewPage = () => {
  return (
    <section>
      <PageHeading title="review list" />
      <div className="page-wrapper">
        <div className="col-span-full">
          <ReviewBox />
        </div>
      </div>
    </section>
  )
}

export default reviewPage
