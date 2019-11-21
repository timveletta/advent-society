import React, { SFC } from "react";
import styled from "styled-components";
import {
  FaAngleUp,
  FaAngleDown,
  FaAngleLeft,
  FaAngleRight
} from "react-icons/fa";

const Container = styled.div`
  width: 100%;
  height: 45vh;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
`;

const Control = styled.button`
  background-color: rgba(0, 0, 0, 0);
  border: none;
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
  color?: string;
}

const Controls: SFC<IControls> = ({
  onUp,
  onDown,
  onLeft,
  onRight,
  color = "#ffffff"
}) => {
  return (
    <Container>
      <Control onClick={() => onUp()} direction={"up"}>
        <FaAngleUp size={"5rem"} color={color} />
      </Control>
      <Control onClick={() => onLeft()} direction={"left"}>
        <FaAngleLeft size={"5rem"} color={color} />
      </Control>
      <Control onClick={() => onRight()} direction={"right"}>
        <FaAngleRight size={"5rem"} color={color} />
      </Control>
      <Control onClick={() => onDown()} direction={"down"}>
        <FaAngleDown size={"5rem"} color={color} />
      </Control>
    </Container>
  );
};

export default Controls;
