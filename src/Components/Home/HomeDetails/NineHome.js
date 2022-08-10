import React from "react";
// import goodis from "../../../Assets/Home/goodis.svg";
import gg from "../../../Assets/Home/gg.svg";


function NineHome() {
  return (

    <div className="row">
      <div className="col-3"></div>
      <div className="col-6">
      <div className="my-5">
            <div className="text-center">
              <h6>We’ve got goodies for you</h6>
              <p>
                We have created some cool, creative, and super useful
                merchandise for you. From t-shirts to journals we have got a
                design-centric collection of products that you can flaunt and
                utilize as designer.
              </p>
              <button className="btn btn-main">Explore Merchandise</button>
            </div>

            <img src={gg} alt="" />
          </div>
      </div>
      <div className="col-3"></div>
    </div>
   
      
         
       
   
  );
}

export default NineHome;
