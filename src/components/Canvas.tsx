import React, { SFC } from "react";
import { SVG_WIDTH, SVG_HEIGHT } from "../constants";

const Canvas: SFC<{ children: React.ReactNode }> = ({ children }) => {
  const viewBox = [0, 0, SVG_WIDTH, SVG_HEIGHT];

  return (
    <svg preserveAspectRatio="xMaxYMax meet" viewBox={`${viewBox}`}>
      {children}
    </svg>
  );
};

export default Canvas;
