// import PropTypes from "prop-types"
import React from "react";
import { FormFeedback, FormGroup, Input, Label } from "reactstrap";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BsFillCalendarFill } from "react-icons/bs";

import { withStyles } from "@material-ui/core/styles";

import Tooltip from "@material-ui/core/Tooltip";

const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#FFFFFF",
    color: "rgba(0, 0, 0, 0.87)",
    // maxWidth: 220,
    fontSize: theme.typography.pxToRem(15),
    border: "1px solid #dadde9",
    borderRadius: 0,
    dropShadow: ".5rem .5rem 1rem #e23",
  },
}))(Tooltip);

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
  toolip,
  imageIcon,
  countIcon,
  ...rest
}) => {
  // console.log(
  //   validationType?.values[name],
  //   validationType,
  //   validationType?.touched[name],
  //   validationType?.errors[name]
  // );
  // console.log(style);
  return (
    <React.Fragment>
      <FormGroup className={style ? style : "mb-4 form-custom"}>
        <Label for={name} className="form-label">
          <small className="fw-bold">{label}</small>
          {toolip && (
            <HtmlTooltip
              title={
                <>
                  <small>
                    <AiOutlineQuestionCircle className="text-secondary" />{" "}
                    {toolip}
                  </small>
                </>
              }
            >
              <span className="cursor ms-2">
                <AiOutlineQuestionCircle className="text-secondary" />
              </span>
            </HtmlTooltip>
          )}
        </Label>
        <div className="input-group mb-2 mr-sm-2">
          {icon && (
            <div className="input-group-prepend">
              <div className="input-group-text">{icon}</div>
            </div>
          )}{" "}
          {imageIcon ? (
            <div className="d-flex align-items-center">
              <img src={imageIcon} alt="icon" />
              <div className="ms-3">
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
              </div>
            </div>
          ) : (
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
          )}
          {count && (
            <div className="word-counter">
              {validationType?.values[name]?.length
                ? validationType?.values[name]?.length
                : 0}
              {count}
            </div>
          )}
          {countIcon && (
            <div className="word-icon">
              {countIcon == "calender" && <BsFillCalendarFill />}
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
