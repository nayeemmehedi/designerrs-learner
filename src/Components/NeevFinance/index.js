import React, { useEffect } from "react";
import NeevForm from "./NeevForm/NeevForm";
import { MdArrowBack } from "react-icons/md";
import { useHistory } from "react-router-dom";
import { getkyc } from "../../Store/kyc/action";
import { useDispatch, useSelector } from "react-redux";
import SweetAlert from "react-bootstrap-sweetalert";

function NeevFinance() {
  const history = useHistory();
  const dispatch = useDispatch();

  const { kyc, error, loading } = useSelector((state) => state.kyc);

  useEffect(() => {
    dispatch(getkyc());
  }, []);

  console.log("kyc", kyc);

  return (
    <div>
      {error ? (
        <SweetAlert
          title={error || "Something went wrong!"}
          warning
          onConfirm={() => dispatch({ type: "GET_KYC_API_ERROR", payload: "" })}
          confirmBtnCssClass="bg-blue-400 px-3 py-2"
          btnSize="lg"
        >
          That thing is still around?
        </SweetAlert>
      ) : null}

      <div className="row pt-3">
        <div className="col-sm-12  col-md-3 col-lg-3 col-xl-3 col-xxl-3">
          <div
            className="txtColor ms-4"
            style={{ fontSize: "18px", cursor: "pointer" }}
            onClick={() => history.goBack()}
          >
            <p className="ms-2">
              <MdArrowBack size={25}></MdArrowBack> Back
            </p>
          </div>
        </div>
        <div className="col-sm-12  col-md-7 col-lg-7 col-xl-7 col-xxl-7">
          <NeevForm />
        </div>
        <div className="col-sm-12  col-md-2 col-lg-2 col-xl-2 col-xxl-2"></div>
      </div>
    </div>
  );
}

export default NeevFinance;
