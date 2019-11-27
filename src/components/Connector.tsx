import React, { SFC } from "react";
import { LINE_WIDTH, LINE_LENGTH } from "../constants";

const Connector: SFC<{
  x: number;
  y: number;
  isHorizontal?: boolean;
}> = ({ x, y, isHorizontal = true }) => {
  return (
    <rect
      id="connector"
      data-name="connector"
      x={x}
      y={y}
      width={isHorizontal ? LINE_LENGTH + 1 : LINE_WIDTH}
      height={isHorizontal ? LINE_WIDTH : LINE_LENGTH + 1}
      fill={"white"}
    />
  );
};

export default Connector;
