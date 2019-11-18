import React, { useState, useEffect, useMemo, SFC } from "react";
import Canvas from "./Canvas";
import Anchor, { IAnchor } from "./Anchor";
import Line from "./Line";

/**
 * S - start point
 * E - end point
 * C - connector
 * A - anchor
 * 0 - empty
 * 1=0
 * 2=2
 * 3=4
 * 4=6
 */
const PUZZLE = `
SCACACACA
C0C0C0C0C
ACACACACA
C0C0C0C0C
ACACACACA
C0C0C0C0C
ACACACACA
C0C0C0C0C
ACACACACE`;

interface IPuzzle {
  inputs: Array<"up" | "down" | "left" | "right">;
  width?: number;
  puzzle?: string;
}

const Puzzle: SFC<IPuzzle> = ({ inputs, width = 5, puzzle = PUZZLE }) => {
  const margin = { top: 36, left: 36 };
  const anchorPos = [0, 128, 256, 384, 512];

  const [anchors, setAnchors] = useState<IAnchor[]>([]);

  useEffect(() => {
    const puzzleRows: string[] = puzzle.match(/.{1,9}/g) || [];
    // create anchor objects
    const anchorMap = puzzleRows
      .filter((v, index) => index % 2 === 0) // only include event indexes for now
      .map((row: string, yIndex: number) => {
        const anchorsList: IAnchor[] = [];
        row.split("").forEach((identifier: string) => {
          if (identifier === "A" || identifier === "S" || identifier === "E") {
            anchorsList.push({
              x: anchorPos[anchorsList.length] + margin.left,
              y: anchorPos[yIndex] + margin.top,
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
      {anchors.map((anchor: IAnchor) => (
        <Anchor key={`${anchor.x}${anchor.y}`} {...anchor} />
      ))}
      {startPoint && <Line startAnchor={startPoint} inputs={inputs} />}
    </Canvas>
  );
};

export default Puzzle;
