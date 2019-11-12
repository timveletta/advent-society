import React from "react";
import PropTypes from "prop-types";
import { Rect } from "react-konva";

const Anchor = ({ x, y, connectedAnchors }) => {
  return (
    <Rect
      id="anchor"
      data-name="anchor"
      x={x}
      y={y}
      width={40}
      height={40}
      fill={"gray"}
    />
  );
};

Anchor.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
};

export default Anchor;
