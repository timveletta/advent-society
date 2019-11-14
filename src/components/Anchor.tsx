import React, { SFC } from "react";
import Connector from "./Connector";
import StartPoint from "./StartPoint";
import EndPoint from "./EndPoint";

export interface IAnchor {
  x: number;
  y: number;
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
        width={20}
        height={20}
        fill={"gray"}
      />
      {right && <Connector x={x} y={y} />}
      {down && <Connector x={x} y={y} isHorizontal={false} />}
      {isStart && <StartPoint x={x} y={y} />}
      {isEnd && <EndPoint x={x} y={y} />}
    </>
  );
};

export default Anchor;
