import React, { useState } from "react";
import { useInterval } from "../hooks/useInterval";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  height: 100vh;
  align-items: center;
  background-color: #333;
`;

const Interval = styled.div`
  color: #fff;
`;

export default function Timer() {
  const targetDate = new Date(2019, 11, 1, 9);
  const [difference, setDifference] = useState(0);

  useInterval(() => {
    setDifference(targetDate - new Date());
  }, 1000);

  const days = () => Math.floor(difference / (1000 * 60 * 60 * 24));

  const hours = () => Math.floor(difference / (1000 * 60 * 60)) % 24;

  const minutes = () => Math.floor(difference / (1000 * 60)) % 60;

  const seconds = () => Math.floor(difference / 1000) % 60;

  return (
    <Container>
      <Interval>
        <h1>{days()}</h1>
        <p>Days</p>
      </Interval>
      <Interval>
        <h1>{hours()}</h1>
        <p>Hours</p>
      </Interval>
      <Interval>
        <h1>{minutes()}</h1>
        <p>Minutes</p>
      </Interval>
      <Interval>
        <h1>{seconds()}</h1>
        <p>Seconds</p>
      </Interval>
    </Container>
  );
}
