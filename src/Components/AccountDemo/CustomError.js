import React from "react";
import { ErrorMessage } from "formik";

function CustomError({ name }) {
  return (
    <div className="text-danger">
      <ErrorMessage name={name}></ErrorMessage>
    </div>
  );
}

export default CustomError;
