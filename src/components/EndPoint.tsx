import React, { SFC } from "react";

const EndPoint: SFC<{ x: number; y: number; isHorizontal?: boolean }> = ({
  x,
  y,
  isHorizontal = true
}) => {
  return (
    <circle
      id="end-point"
      data-name="end-point"
      cx={x + 10}
      cy={y + 10}
      r={30}
      fill={"white"}
    />
  );
};

export default EndPoint;
