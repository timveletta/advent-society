import React, { SFC, useContext, useState, useEffect } from "react";
import { IAnchor } from "./Anchor";

const Line: SFC<{
  startAnchor: IAnchor;
  inputs?: Array<"up" | "down" | "left" | "right">;
}> = ({ startAnchor, inputs }) => {
  const [lineAnchors, setLineAnchors] = useState([startAnchor]);

  useEffect(() => {
    // take the last input and do something with it
    if (inputs) {
      switch (inputs[inputs.length - 1]) {
        case "up":
          return onUp();
        case "down":
          return onDown();
        case "left":
          return onLeft();
        case "right":
          return onRight();
      }
    }
  }, [inputs]);

  const onUp = () => {
    const upAnchor = lineAnchors[lineAnchors.length - 1].up;
    if (upAnchor) {
      performAction(upAnchor);
    }
  };
  const onDown = () => {
    const downAnchor = lineAnchors[lineAnchors.length - 1].down;
    if (downAnchor) {
      performAction(downAnchor);
    }
  };
  const onLeft = () => {
    const leftAnchor = lineAnchors[lineAnchors.length - 1].left;
    if (leftAnchor) {
      performAction(leftAnchor);
    }
  };
  const onRight = () => {
    const rightAnchor = lineAnchors[lineAnchors.length - 1].right;
    if (rightAnchor) {
      performAction(rightAnchor);
    }
  };

  const performAction = (nextAnchor: IAnchor) => {
    if (nextAnchor && !lineAnchors.find((a: IAnchor) => a === nextAnchor)) {
      setLineAnchors((prev: IAnchor[]) => {
        const a = prev.concat([nextAnchor]);
        return a;
      });
    } else if (
      nextAnchor &&
      lineAnchors.findIndex((a: IAnchor) => a === nextAnchor) ===
        lineAnchors.length - 2
    ) {
      setLineAnchors((prev: IAnchor[]) => prev.slice(0, -1));
    }
  };

  return (
    <>
      <circle
        id="line-start"
        data-name="line-start"
        cx={startAnchor.x + 10}
        cy={startAnchor.y + 10}
        r={40}
        fill={"#ffef00"}
      />
      {lineAnchors.length > 1 &&
        lineAnchors.map(
          (anchor: IAnchor, index: number) =>
            index !== 0 && (
              <line
                key={index}
                x1={lineAnchors[index - 1].x + 10}
                y1={lineAnchors[index - 1].y + 10}
                x2={anchor.x + 10}
                y2={anchor.y + 10}
                stroke={"#ffef00"}
                strokeWidth={20}
                strokeLinecap="round"
              />
            )
        )}
    </>
  );
};

export default Line;