import React, { useState, useEffect, useMemo, FC } from "react";
import Canvas from "./Canvas";
import Anchor, { IAnchor } from "./Anchor";
import Line from "./Line";
import { MARGIN, LINE_WIDTH } from "../constants";

interface IPuzzle {
  inputs: Array<"up" | "down" | "left" | "right">;
  columns: number;
  puzzleMap: string;
  color?: string;
  borderColor?: string;
  lineColor?: string;
}

const Puzzle: FC<IPuzzle> = ({
  inputs,
  columns,
  puzzleMap,
  color = "#ffffff",
  borderColor = "#000000",
  lineColor = "#ffef00"
}) => {
  const [anchors, setAnchors] = useState<IAnchor[]>([]);
  const anchorColumns: number[] = [];
  const anchorRows: number[] = [];
  const lineLength: number = 128;

  useEffect(() => {
    const rows = Math.ceil(puzzleMap.length / (columns * 2 - 1) / 2);
    for (let i = 0; i < columns; i++) {
      anchorColumns.push(i * lineLength);
    }
    for (let i = 0; i < rows; i++) {
      anchorRows.push(i * lineLength);
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
      .filter((v, index) => index % 2 === 0) // only include event indexes for now
      .map((row: string, yIndex: number) => {
        const anchorsList: IAnchor[] = [];
        row.split("").forEach((identifier: string) => {
          if (identifier === "A" || identifier === "S" || identifier === "E") {
            anchorsList.push({
              x: anchorColumns[anchorsList.length] + MARGIN.left,
              y: anchorRows[yIndex] + MARGIN.top,
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
    <Canvas width={columns * LINE_WIDTH + 2 * MARGIN.left}>
      <defs>
        <g id="map">
          {anchors.map((anchor: IAnchor) => (
            <Anchor
              key={`${anchor.x}${anchor.y}`}
              {...anchor}
              lineLength={lineLength}
            />
          ))}
        </g>
        <linearGradient id="bg" gradientUnits="userSpaceOnUse">
          <stop offset="" style={{ stopColor: color }} />
        </linearGradient>
        <mask id="mapMask">
          <use xlinkHref="#map" />
        </mask>
      </defs>
      <use xlinkHref="#map" stroke={borderColor} stroke-width="15" />
      <rect
        id="bg"
        fill="url(#bg)"
        width={columns * LINE_WIDTH + 2 * MARGIN.left}
        height="600"
        mask="url(#mapMask)"
      />
      {startPoint && (
        <Line startAnchor={startPoint} inputs={inputs} lineColor={lineColor} />
      )}
    </Canvas>
  );
};

export default Puzzle;
