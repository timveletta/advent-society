import React, { SFC } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: 250px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
`;

const Control = styled.button`
  grid-area: ${(p: { direction: string }) =>
    p.direction === "up"
      ? "1/2"
      : p.direction === "left"
      ? "2/1"
      : p.direction === "right"
      ? "2/3"
      : p.direction === "down"
      ? "3/2"
      : "1/1"};
`;

interface IControls {
  onUp: () => void;
  onDown: () => void;
  onLeft: () => void;
  onRight: () => void;
}

const Controls: SFC<IControls> = ({ onUp, onDown, onLeft, onRight }) => {
  return (
    <Container>
      <Control onClick={() => onUp()} direction={"up"}>
        Up
      </Control>
      <Control onClick={() => onLeft()} direction={"left"}>
        Left
      </Control>
      <Control onClick={() => onRight()} direction={"right"}>
        Right
      </Control>
      <Control onClick={() => onDown()} direction={"down"}>
        Down
      </Control>
    </Container>
  );
};

export default Controls;
