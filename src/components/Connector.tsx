import React, { SFC } from "react";
import { LINE_WIDTH } from "../constants";

const Connector: SFC<{
  x: number;
  y: number;
  lineLength: number;
  isHorizontal?: boolean;
}> = ({ x, y, lineLength, isHorizontal = true }) => {
  return (
    <rect
      id="connector"
      data-name="connector"
      x={x}
      y={y}
      width={isHorizontal ? lineLength : LINE_WIDTH}
      height={isHorizontal ? LINE_WIDTH : lineLength}
      fill={"gray"}
    />
  );
};

export default Connector;
