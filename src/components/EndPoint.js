import React from "react";
import PropTypes from "prop-types";

const EndPoint = ({ x, y, isHorizontal = true }) => {
  return (
    <rect
      id="end-point"
      data-name="end-point"
      x={x}
      y={y}
      width={isHorizontal ? 80 : 40}
      height={isHorizontal ? 40 : 80}
      fill={"gray"}
    />
  );
};

EndPoint.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  isHorizontal: PropTypes.bool
};

export default EndPoint;
