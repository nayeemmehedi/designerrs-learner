import React from "react";
// import { Spinner } from "reactstrap";

const Loading = () => {
  return (
    // <div className="d-flex justify-content-center align-items-center loading p-5">
    //   <>
    //     <Spinner animation="grow" variant="danger" />
    //   </>
    // </div>
    <div className="d-flex justify-content-center align-items-center loading p-5" style={{height: '70vh'}}>
      <>
        <div className="text-center">
          <box-icon
            name="loader"
            animation="spin"
            size="30px"
            color="#cd2026"
          ></box-icon>
          <p className="font_13" style={{ color: "#cd2026" }}>
            Loading...
          </p>
        </div>
      </>
    </div>
  );
};

export default Loading;
