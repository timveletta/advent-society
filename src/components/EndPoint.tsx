import React, { SFC } from "react";

const EndPoint: SFC<{ x: number; y: number; isHorizontal?: boolean }> = ({
  x,
  y,
  isHorizontal = true
}) => {
  return (
    <rect
      id="end-point"
      data-name="end-point"
      x={x}
      y={y}
      width={isHorizontal ? 60 : 20}
      height={isHorizontal ? 20 : 60}
      fill={"gray"}
    />
  );
};

export default EndPoint;
