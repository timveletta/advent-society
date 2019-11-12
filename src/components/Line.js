import React, { useState } from "react";
import PropTypes from "prop-types";
import { Circle } from "react-konva";

const Line = ({ startX, startY, startingAnchor }) => {
  const [position, setPosition] = useState({ x: startX + 20, y: startY + 20 });

  const onDrag = event => {};

  return (
    <>
      <Circle
        id="line-start"
        data-name="line-start"
        x={startX + 20}
        y={startY + 20}
        radius={56}
        fill={"#ffef00"}
      />
      <Circle
        id="drag-handler"
        data-name="drag-handler"
        x={position.x}
        y={position.y}
        radius={56}
        fill={"#ffef00"}
        opacity={0.1}
        onDragMove={onDrag}
        draggable
      />
    </>
  );
};

Line.propTypes = {
  startX: PropTypes.number.isRequired,
  startY: PropTypes.number.isRequired
};

export default Line;
