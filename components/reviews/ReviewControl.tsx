import React from "react"

const ReviewControl = () => {
  return (
    <div className="review">
      <div className="flex gap-4">
        <button className="px-4 py-2.5 capitalize text-xs text-reject-btn border border-reject-btn rounded-3xl duration-300 font-semibold hover:bg-reject-btn hover:text-white">
          reject
        </button>
        <button className="px-4 py-2.5 capitalize text-xs text-approve-btn border border-approve-btn rounded-3xl duration- font-semibold hover:bg-approve-btn hover:text-white">
          approve
        </button>
      </div>
    </div>
  )
}

export default ReviewControl
