import React from "react"
import ReviewHeader from "./ReviewHeader"
import ReviewBody from "./ReviewBody"
import ReviewControl from "./ReviewControl"

const ReviewWrapper = () => {
  return (
    <section className="widget flex flex-col md:flex-row gap-7 mb-4">
      <ReviewHeader />
      <article className="content flex-auto flex gap-4">
        <ReviewBody />
        <ReviewControl />
      </article>
    </section>
  )
}

export default ReviewWrapper
