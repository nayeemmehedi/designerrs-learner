import React from "react";
import useWindowDimensions from "../../Hooks/useWindowDimensions ";

const SackBar = ({ history, title, onSubmit }) => {
  const { width } = useWindowDimensions();
  return (
    <div>
      <div
        style={{
          position: "fixed",
          bottom: 0,
          width: width <= "767" ? "100%" : "50%",
          zIndex: 10000000000
        }}
      >
        <div className="d-flex justify-content-between bg-white  p-4">
          <span
            className="btn btn-outline-secondary right"
            onClick={() => history && history.goBack()}
            style={{ borderRadius: "0" }}
          >
            Back
          </span>

          <button
            className="btn btn-main2 right px-5 ms-5"
            type="submit"
            onClick={onSubmit}
          >
            {title ? title : "Save Changes"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SackBar;
