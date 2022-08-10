import React from 'react'
import six from "../../../Assets/Home/six.svg";
import { useHistory } from "react-router-dom"

function SixHome() {
  const history = useHistory();
  return (
    <div>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-10">
          <div className='my-5'>
            <div className="row">
              <div className={`col-4`}>
                <h1 className="pt-5"> Avail lifetime career opportunities</h1>
                <p>
                  Leverage on opportunities from design driven companies in our jobs board for a lifetime.
                </p>

                <button className="btn btn-main2" onClick={() => {
                  history.push("/jobs")
                }}>
                  <p className="mx-3 p-0 m-0">Go to Jobs Board</p>
                </button>
              </div>
              <div className={`col-5 `}>
                <div className="mx-4 px-4">
                  <img
                    className=""
                    style={{ height: "354px", width: "auto" }}
                    src={six}
                    alt=""
                  />
                </div>
              </div>
            </div>


          </div>
        </div>
        <div className="col-2"></div>
      </div>

    </div>


  )
}

export default SixHome