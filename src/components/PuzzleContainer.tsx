import React, { useState } from "react";
import styled from "styled-components";
import Puzzle from "./Puzzle";
import Controls from "./Controls";

const Container = styled.div``;

const PuzzleContainer = () => {
  const [inputs, setInputs] = useState<Array<"up" | "down" | "left" | "right">>(
    []
  );

  const addInput = (input: "up" | "down" | "left" | "right") => {
    setInputs(i => i.concat([input]));
  };

  return (
    <Container>
      <Puzzle inputs={inputs} />
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
