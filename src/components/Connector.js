import React from "react";
import PropTypes from "prop-types";
import { Rect } from "react-konva";

const Connector = ({ x, y, isHorizontal = true }) => {
  return (
    <Rect
      id="connector"
      data-name="connector"
      x={x}
      y={y}
      width={isHorizontal ? 128 : 40}
      height={isHorizontal ? 40 : 128}
      fill={"gray"}
    />
  );
};

Connector.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  isHorizontal: PropTypes.bool
};

export default Connector;
