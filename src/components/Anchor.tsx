import React, { SFC } from "react";
import Connector from "./Connector";
import StartPoint from "./StartPoint";
import EndPoint from "./EndPoint";
import { LINE_WIDTH } from "../constants";

export interface IAnchor {
  x: number;
  xIndex: number;
  y: number;
  yIndex: number;
  up?: IAnchor;
  down?: IAnchor;
  left?: IAnchor;
  right?: IAnchor;
  isStart?: boolean;
  isEnd?: boolean;
  hasCollect?: boolean;
}

const Anchor: SFC<IAnchor> = ({
  x,
  y,
  down,
  right,
  isStart = false,
  isEnd = false,
  hasCollect = false
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
      {right && <Connector x={x} y={y} />}
      {down && <Connector x={x} y={y} isHorizontal={false} />}
      {isStart && <StartPoint x={x} y={y} />}
      {isEnd && <EndPoint x={x} y={y} />}
      {hasCollect && (
        <circle
          id={`collect-${x}${y}`}
          data-name="collect"
          cx={x + LINE_WIDTH / 2}
          cy={y + LINE_WIDTH / 2}
          r={LINE_WIDTH}
          fill={"#333"}
        />
      )}
    </>
  );
};

export default Anchor;
