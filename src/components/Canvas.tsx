import React, { SFC } from "react";
import { SVG_WIDTH, SVG_HEIGHT } from "../constants";

const Canvas: SFC<{
  children: React.ReactNode;
  width?: number;
  height?: number;
}> = ({ children, width = SVG_WIDTH, height = SVG_HEIGHT }) => {
  const viewBox = [0, 0, width, height];

  return <svg viewBox={`${viewBox}`}>{children}</svg>;
};

export default Canvas;
