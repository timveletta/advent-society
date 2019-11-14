import React, { SFC } from "react";

const Connector: SFC<{ x: number; y: number; isHorizontal?: boolean }> = ({
  x,
  y,
  isHorizontal = true
}) => {
  return (
    <rect
      id="connector"
      data-name="connector"
      x={x}
      y={y}
      width={isHorizontal ? 128 : 20}
      height={isHorizontal ? 20 : 128}
      fill={"gray"}
    />
  );
};

export default Connector;
