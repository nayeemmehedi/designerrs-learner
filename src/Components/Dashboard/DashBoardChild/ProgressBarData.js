import React from "react"
import { ProgressBar } from "react-bootstrap"
import Loading from "../../Common/Loading"

const ProgressBarData = ({ value, color, vartiant }) => {
  console.log(value)

  return (
    <div
      class="progress-bar"
      style={{ backgroundColor: color, width: `${value}%` }}
      role="progressbar"
    ></div>
  )
}

export default ProgressBarData
