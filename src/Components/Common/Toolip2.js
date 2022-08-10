import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";

const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#FFFFFF",
    color: "rgba(0, 0, 0, 0.87)",
    fontSize: theme.typography.pxToRem(15),
    border: "1px solid #dadde9",
    borderRadius: 0,
    dropShadow: ".5rem .5rem 1rem #e23",
  },
}))(Tooltip);

const Toolip2 = ({ toolip, data }) => {
  return (
    <React.Fragment>
      {toolip && (
        <HtmlTooltip
          title={
            <>
              <small>
                 {toolip}
              </small>
            </>
          }
        >
          <span className="cursor fw-bold">
            {data}..
          </span>
        </HtmlTooltip>
      )}
    </React.Fragment>
  );
};

export default Toolip2;
