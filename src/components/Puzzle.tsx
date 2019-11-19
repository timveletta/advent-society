import React, { useState, useEffect, useMemo, SFC } from "react";
import Canvas from "./Canvas";
import Anchor, { IAnchor } from "./Anchor";
import Line from "./Line";
import { MARGIN, LINE_WIDTH, SVG_WIDTH, SVG_HEIGHT } from "../constants";

interface IPuzzle {
  inputs: Array<"up" | "down" | "left" | "right">;
  columns: number;
  puzzleMap: string;
}

const Puzzle: SFC<IPuzzle> = ({ inputs, columns, puzzleMap }) => {
  const [anchors, setAnchors] = useState<IAnchor[]>([]);
  const anchorPositions: number[] = [];
  let lineLength: number = 128;

  useEffect(() => {
    const useableWidth = SVG_WIDTH - MARGIN.left * 2 - LINE_WIDTH;
    if (columns > 1) {
      for (let i = 0; i < columns; i++) {
        anchorPositions.push((i * useableWidth) / (columns - 1));
      }
    } else {
      anchorPositions.push(useableWidth / 2);
    }
    lineLength =
      columns > puzzleMap.length / columns
        ? useableWidth / columns
        : (SVG_HEIGHT - MARGIN.top * 2 - LINE_WIDTH) /
          puzzleMap.length /
          columns;
  }, [columns, puzzleMap]);

  useEffect(() => {
    const puzzleRows: string[] = puzzleMap.match(/.{1,9}/g) || [];
    // create anchor objects
    const anchorMap = puzzleRows
      .filter((v, index) => index % 2 === 0) // only include event indexes for now
      .map((row: string, yIndex: number) => {
        const anchorsList: IAnchor[] = [];
        row.split("").forEach((identifier: string) => {
          if (identifier === "A" || identifier === "S" || identifier === "E") {
            anchorsList.push({
              x: anchorPositions[anchorsList.length] + MARGIN.left,
              y: anchorPositions[yIndex] + MARGIN.top,
              isStart: identifier === "S",
              isEnd: identifier === "E"
            } as IAnchor);
          }
        });
        return anchorsList;
      });

    // link anchors based on whether they are connected
    anchorMap.forEach((row: IAnchor[], yIndex: number) => {
      row.forEach((anchor: IAnchor, xIndex: number) => {
        // check right
        if (xIndex + 1 < anchorMap[yIndex].length) {
          anchor.right =
            puzzleRows[yIndex * 2][xIndex * 2 + 1] === "C"
              ? anchorMap[yIndex][xIndex + 1]
              : undefined;
        }
        // check left
        if (xIndex - 1 >= 0) {
          anchor.left =
            puzzleRows[yIndex * 2][xIndex * 2 - 1] === "C"
              ? anchorMap[yIndex][xIndex - 1]
              : undefined;
        }
        // check down
        if (yIndex + 1 < anchorMap.length) {
          anchor.down =
            puzzleRows[yIndex * 2 + 1][xIndex * 2] === "C"
              ? anchorMap[yIndex + 1][xIndex]
              : undefined;
        }
        // check up
        if (yIndex - 1 >= 0) {
          anchor.up =
            puzzleRows[yIndex * 2 - 1][xIndex * 2] === "C"
              ? anchorMap[yIndex - 1][xIndex]
              : undefined;
        }
      });
    });

    setAnchors(anchorMap.flat());
  }, []);

  const startPoint: IAnchor | undefined = useMemo(
    () => anchors.find((anchor: IAnchor) => anchor.isStart),
    [anchors]
  );

  return (
    <Canvas>
      <g>
        {anchors.map((anchor: IAnchor) => (
          <Anchor
            key={`${anchor.x}${anchor.y}`}
            {...anchor}
            lineLength={lineLength}
          />
        ))}
      </g>
      {startPoint && <Line startAnchor={startPoint} inputs={inputs} />}
    </Canvas>
  );
};

export default Puzzle;
