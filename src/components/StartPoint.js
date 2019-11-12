import React from "react";
import PropTypes from "prop-types";
import { Circle } from "react-konva";

const StartPoint = ({ x, y }) => {
  return (
    <Circle
      id="start-point"
      data-name="start-point"
      x={x + 20}
      y={y + 20}
      radius={56}
      fill={"gray"}
    />
  );
};

StartPoint.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
};

export default StartPoint;
