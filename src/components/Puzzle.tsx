import React, { useState, useEffect, useMemo, FC } from "react";
import Canvas from "./Canvas";
import Anchor, { IAnchor } from "./Anchor";
import Line from "./Line";
import { MARGIN, LINE_WIDTH, LINE_LENGTH, BLOCK_SIZE } from "../constants";

interface IPuzzle {
  inputs: Array<"up" | "down" | "left" | "right">;
  columns: number;
  puzzleMap: string;
  solution: Array<{ x: number; y: number } | null>;
  onPuzzleSolved: () => void;
  color?: string;
  borderColor?: string;
  lineColor?: string;
  collect: Array<{ x: number; y: number } | null> | null;
  blocks?: Array<{ x: number; y: number; color: string } | null> | null;
}

const Puzzle: FC<IPuzzle> = ({
  inputs,
  columns,
  puzzleMap,
  solution,
  onPuzzleSolved,
  color = "#ffffff",
  borderColor = "#fff",
  lineColor = "#2ecc71",
  collect = [],
  blocks = []
}) => {
  const [anchors, setAnchors] = useState<IAnchor[]>([]);
  const anchorColumns: number[] = [];
  const anchorRows: number[] = [];

  useEffect(() => {
    const rows = Math.ceil(puzzleMap.length / (columns * 2 - 1) / 2);
    for (let i = 0; i < columns; i++) {
      anchorColumns.push(i * LINE_LENGTH);
    }
    for (let i = 0; i < rows; i++) {
      anchorRows.push(i * LINE_LENGTH);
    }
  }, [columns, puzzleMap]);

  useEffect(() => {
    const columnWidth = columns * 2 - 1;
    let puzzleRows: string[] = [];
    for (let i = 0; i < puzzleMap.length; i += columnWidth) {
      puzzleRows.push(puzzleMap.slice(i, i + columnWidth));
    }
    // create anchor objects
    const anchorMap = puzzleRows
      .filter((v, index) => index % 2 === 0) // only include even indexes for now
      .map((row: string, yIndex: number) =>
        row
          .split("")
          .filter((v, index) => index % 2 === 0) // only include even indexes for now
          .map((identifier: string, xIndex: number) => {
            if (
              identifier === "A" ||
              identifier === "S" ||
              identifier === "E"
            ) {
              return {
                x: anchorColumns[xIndex] + MARGIN.left,
                y: anchorRows[yIndex] + MARGIN.top,
                xIndex,
                yIndex,
                isStart: identifier === "S",
                isEnd: identifier === "E",
                hasCollect:
                  collect &&
                  collect.find(
                    c => c !== null && c.x === xIndex && c.y === yIndex
                  )
              } as IAnchor;
            }
          })
      );

    // link anchors based on whether they are connected
    anchorMap.forEach((row: (IAnchor | undefined)[], yIndex: number) => {
      row.forEach((anchor: IAnchor | undefined, xIndex: number) => {
        if (!anchor) {
          return;
        }

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

    const filteredAnchors: IAnchor[] = anchorMap
      .flat()
      .filter((anchor): anchor is IAnchor => anchor !== undefined);

    setAnchors(filteredAnchors);
  }, []);

  const startPoint: IAnchor | undefined = useMemo(
    () => anchors.find((anchor: IAnchor) => anchor.isStart),
    [anchors]
  );

  return (
    <Canvas width={(columns - 1) * LINE_LENGTH + 2 * MARGIN.left}>
      <defs>
        <g id="map">
          {anchors.map((anchor: IAnchor) => (
            <Anchor key={`${anchor.x}${anchor.y}`} {...anchor} />
          ))}
        </g>
        <linearGradient id="bg" gradientUnits="userSpaceOnUse">
          <stop offset="0" style={{ stopColor: color }} />
        </linearGradient>
        <mask id="mapMask">
          <use xlinkHref="#map" />
        </mask>
      </defs>
      <use xlinkHref="#map" stroke={borderColor} strokeWidth="15" />
      <rect
        id="bg"
        fill="url(#bg)"
        width={columns * LINE_LENGTH + 2 * MARGIN.left}
        height="600"
        mask="url(#mapMask)"
      />
      {startPoint && (
        <Line
          startAnchor={startPoint}
          inputs={inputs}
          lineColor={lineColor}
          solution={solution}
          onPuzzleSolved={onPuzzleSolved}
        />
      )}
      {blocks &&
        blocks.map(
          (block, index) =>
            block && (
              <rect
                key={index}
                fill={block.color}
                width={BLOCK_SIZE}
                height={BLOCK_SIZE}
                x={(block.x + 1) * LINE_LENGTH - LINE_LENGTH / 2 + LINE_WIDTH}
                y={(block.y + 1) * LINE_LENGTH - LINE_LENGTH / 2 + LINE_WIDTH}
              />
            )
        )}
    </Canvas>
  );
};

export default Puzzle;
