import React from "react";
import PropTypes from "prop-types";

const StartPoint = ({ x, y }) => {
  return (
    <circle
      id="start-point"
      data-name="start-point"
      cx={x + 20}
      cy={y + 20}
      r={56}
      fill={"gray"}
    />
  );
};

StartPoint.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
};

export default StartPoint;
