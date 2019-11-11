import React from "react";
import PropTypes from "prop-types";

const Anchor = ({ x, y }) => {
  return (
    <rect
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
