import React, { useState } from "react";
import styled from "styled-components";
import Puzzle from "../components/Puzzle";
import Controls from "../components/Controls";

const Container = styled.div``;

/**
 * S - start point
 * E - end point
 * C - connector
 * A - anchor
 * 0 - empty
 */
const PUZZLE = `
SCACACACA
C0C0C000C
ACACACACA
C0C0C0C0C
ACACACACA
C0C0C0C0C
ACACACACA
C0C0C0C0C
ACACACACE`;

const PuzzleContainer = () => {
  const [inputs, setInputs] = useState<Array<"up" | "down" | "left" | "right">>(
    []
  );

  const addInput = (input: "up" | "down" | "left" | "right") => {
    setInputs(i => i.concat([input]));
  };

  return (
    <Container>
      <Puzzle inputs={inputs} puzzleMap={PUZZLE} columns={5} />
      <Controls
        onUp={() => addInput("up")}
        onDown={() => addInput("down")}
        onLeft={() => addInput("left")}
        onRight={() => addInput("right")}
      />
    </Container>
  );
};

export default PuzzleContainer;
