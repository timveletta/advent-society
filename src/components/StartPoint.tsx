import React, { SFC } from "react";

const StartPoint: SFC<{ x: number; y: number }> = ({ x, y }) => {
  return (
    <circle
      id="start-point"
      data-name="start-point"
      cx={x + 10}
      cy={y + 10}
      r={35}
      fill={"white"}
    />
  );
};

export default StartPoint;
