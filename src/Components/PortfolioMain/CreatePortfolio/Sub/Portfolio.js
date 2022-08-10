import React from "react"
import portfolioBg from "../../../../Assets/Images/portfolioBg.svg"
const Portfolio = () => {
  return (
    <div className="bg-white p-3">
      <div className="row">
        <div className="col-md-4 d-flex justify-content-center align-items-center">
          <div  className="p-4">
            <small>
              Add your case studies from sites like Behance, Dribbble andMedium.
            </small>
            <button className="btn btn-main2 mt-3">+ Add Portfolios</button>
          </div>
        </div>
        <div className="col-md-6">
          <img src={portfolioBg} />
        </div>
      </div>
    </div>
  )
}

export default Portfolio
