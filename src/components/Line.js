import React, { useState } from "react";
import PropTypes from "prop-types";

const Line = ({ startX, startY }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: startX + 20, y: startY + 20 });
  const [origin, setOrigin] = useState({ x: 0, y: 0 });

  const onDragStart = event => {
    setOrigin({
      x: event.clientX || event.touches[0].clientX,
      y: event.clientY || event.touches[0].clientY
    });
    setIsDragging(true);
  };

  const onDragEnd = event => {
    setIsDragging(false);
  };

  const onDrag = event => {
    if (isDragging) {
      setPosition({
        x: event.clientX || event.touches[0].clientX - origin.x,
        y: event.clientY || event.touches[0].clientY - origin.y
      });
    }
  };

  return (
    <circle
      id="line-start"
      data-name="line-start"
      cx={position.x}
      cy={position.y}
      r={56}
      fill={"#ffef00"}
      onMouseDown={onDragStart}
      onMouseUp={onDragEnd}
      onMouseMove={onDrag}
      onTouchStart={onDragStart}
      onTouchEnd={onDragEnd}
      onTouchCancel={onDragEnd}
      onTouchMove={onDrag}
    />
  );
};

Line.propTypes = {
  startX: PropTypes.number.isRequired,
  startY: PropTypes.number.isRequired
};

export default Line;
