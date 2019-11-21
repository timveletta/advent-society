import React, { SFC } from "react";
import Connector from "./Connector";
import StartPoint from "./StartPoint";
import EndPoint from "./EndPoint";
import { LINE_WIDTH } from "../constants";

export interface IAnchor {
  x: number;
  y: number;
  lineLength: number;
  up?: IAnchor;
  down?: IAnchor;
  left?: IAnchor;
  right?: IAnchor;
  isStart?: boolean;
  isEnd?: boolean;
}

const Anchor: SFC<IAnchor> = ({
  x,
  y,
  lineLength,
  down,
  right,
  isStart = false,
  isEnd = false
}) => {
  return (
    <>
      <rect
        id="anchor"
        data-name="anchor"
        x={x}
        y={y}
        width={LINE_WIDTH}
        height={LINE_WIDTH}
        fill={"white"}
      />
      {right && <Connector x={x} y={y} lineLength={lineLength} />}
      {down && (
        <Connector x={x} y={y} lineLength={lineLength} isHorizontal={false} />
      )}
      {isStart && <StartPoint x={x} y={y} />}
      {isEnd && <EndPoint x={x} y={y} />}
    </>
  );
};

export default Anchor;
