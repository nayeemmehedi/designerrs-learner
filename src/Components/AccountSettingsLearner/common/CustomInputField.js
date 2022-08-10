// import PropTypes from "prop-types"
import React from "react";
import { FormFeedback, FormGroup, Input, Label } from "reactstrap";
import { AiOutlineQuestionCircle } from "react-icons/ai";

const CustomInputField = ({
  label,
  name,
  type,
  placeholder,
  validationType,
  style,
  count,
  icon,
  message,
  ...rest
}) => {
  // console.log("name",validationType?.values[name])
  // console.log("value",name)

  // console.log(
  //   "value",
  //   validationType?.values[name],
  //   validationType,
  //   validationType?.touched[name]
  // );
  // validationType?.errors[name]

  // console.log(style);
  return (
    <React.Fragment>
      <FormGroup className={style ? style : "mb-4 form-custom"}>
        <div className="input-group mb-2 mr-sm-2">
          {icon && (
            <div className="input-group-prepend">
              <div className="input-group-text">{icon}</div>
            </div>
          )}
          <Input
            name={name}
            id={name}
            placeholder={placeholder}
            type={type}
            onChange={validationType.handleChange}
            onBlur={validationType.handleBlur}
            value={validationType?.values[name]}
            invalid={
              validationType.touched[name] && validationType.errors[name]
                ? true
                : false
            }
            {...rest}
          />
          {count && (
            <div className="word-counter">
              {validationType?.values[name]?.length
                ? validationType?.values[name]?.length
                : 0}
              {count}
            </div>
          )}
          {validationType?.touched[name] &&
          validationType?.errors[name] !== "" ? (
            <FormFeedback type="invalid">
              {validationType?.errors[name]}
            </FormFeedback>
          ) : null}
        </div>
        {message && <small>{message}</small>}
        {/* <FormFeedback type="invalid">
          {validationType?.errors[name]}
        </FormFeedback> */}
      </FormGroup>
    </React.Fragment>
  );
};

// CustomInputField.propTypes = {
//   label: PropTypes.string,
//   name: PropTypes.string,
//   type: PropTypes.string,
//   placeholder: PropTypes.string,
//   validationType: PropTypes.object,
//   rest: PropTypes.object,
// }

export default CustomInputField;
