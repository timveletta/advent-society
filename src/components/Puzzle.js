import React from "react";
import { Stage, Layer } from "react-konva";
import Anchor from "./Anchor";
import Connector from "./Connector";
import StartPoint from "./StartPoint";
import EndPoint from "./EndPoint";
import Line from "./Line";

const Puzzle = () => {
  const margin = { top: 36, left: 36 };
  const anchorPos = [0, 128, 256, 384, 512];

  return (
    <Stage width={640} height={640}>
      <Layer>
        <StartPoint x={margin.left} y={margin.top} />
        {anchorPos.map((x, xIndex) =>
          anchorPos.map((y, yIndex) => (
            <>
              <Anchor x={margin.left + x} y={margin.top + y} />
              {xIndex !== anchorPos.length - 1 && (
                <Connector x={margin.left + x} y={margin.top + y} />
              )}
              {yIndex !== anchorPos.length - 1 && (
                <Connector
                  x={margin.left + x}
                  y={margin.top + y}
                  isHorizontal={false}
                />
              )}
            </>
          ))
        )}
        <EndPoint
          isHorizontal={false}
          x={margin.left + anchorPos[anchorPos.length - 1]}
          y={margin.top + anchorPos[anchorPos.length - 1]}
        />

        <Line startX={margin.left} startY={margin.top} />
      </Layer>
    </Stage>
  );
};

export default Puzzle;
