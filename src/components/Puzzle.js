import React from "react";
import Canvas from "./Canvas";
import Anchor from "./Anchor";
import Connector from "./Connector";
import StartPoint from "./StartPoint";
import EndPoint from "./EndPoint";
import Line from "./Line";

const Puzzle = () => {
  const margin = { top: 36, left: 36 };
  const anchorPos = [0, 128, 256, 384, 512];

  return (
    <Canvas>
      <StartPoint x={margin.left} y={margin.top} />
      {anchorPos.map((x, xIndex) =>
        anchorPos.map((y, yIndex) => (
          <g key={`${xIndex} ${yIndex}`}>
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
          </g>
        ))
      )}
      <EndPoint
        isHorizontal={false}
        x={margin.left + anchorPos[anchorPos.length - 1]}
        y={margin.top + anchorPos[anchorPos.length - 1]}
      />

      <Line startX={margin.left} startY={margin.top} />
    </Canvas>
  );
};

export default Puzzle;
