import React, { useContext } from "react"
import { PortfolioContextMade } from "../../PortfolioMain/MiddleSidePortfolio/PortfolioContext"

function Portfolio({ loading, portfolioValue, error }) {
  const [PortfolioContext, setPortfolioContex] =
    useContext(PortfolioContextMade)

  return (
    <div className={PortfolioContext ? "bgGray p-4 shadow-sm " : " p-4"}>
      <div>
        <div className="d-flex justify-content-between">
          <p className="fs-5 iconColor  ">Portfolio</p>
        </div>
      </div>

      <div>
        {PortfolioContext && <hr></hr>}
        <div className="row">
          <div className="col-md-6">
            <div className="w-75 px-3 border-start border-danger">
              <p>Type of work</p>
              {[1, 2, 3, 4]?.map((v, idx) => (
                <div key={idx}>
                  {idx == 0 ? (
                    <button className="btn btn-danger m-2 borderRedius1">
                      design {v}
                    </button>
                  ) : (
                    <button className="btn btn-light m-2 borderRedius1">
                      design {v}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-6">
            <div className="w-75 px-3 border-start border-danger">
              <p>Industry</p>
              {[1, 2, 3, 4]?.map((v, idx) => (
                <div key={idx}>
                  <button className="btn btn-light m-2 borderRedius1">
                    design {v}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
