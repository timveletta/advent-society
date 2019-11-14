import React, { SFC } from "react";

const Canvas: SFC<{ children: React.ReactNode }> = ({ children }) => {
  const viewBox = [0, 0, 624, 624];

  return (
    <svg preserveAspectRatio="xMaxYMax meet" viewBox={`${viewBox}`}>
      {children}
    </svg>
  );
};

export default Canvas;
