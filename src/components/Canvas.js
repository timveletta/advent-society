import React from "react";

export default function Canvas({ children }) {
  const viewBox = [0, 0, 624, 624];
  return (
    <svg preserveAspectRatio="xMaxYMax meet" viewBox={viewBox}>
      {children}
    </svg>
  );
}
