import React, { useState, useCallback } from "react";
import styled from "styled-components";
import QrCodeReader from "../components/QrCodeReader";
import { ReactComponent as QrCodeIcon } from "../qrcode.svg";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  height: 100vh;
  text-align: center;
  color: #fff;
`;

const DayContainer = styled.h1`
  text-transform: uppercase;
  font-size: 3rem;
  margin-bottom: 0;
`;

const PuzzleTitle = styled.h3`
  text-transform: uppercase;
  font-size: 2rem;
  margin: 0;
  font-weight: 200;
`;

const LightText = styled.h6`
  font-size: 1rem;
  font-weight: 200;
  letter-spacing: 0.15rem;
`;

const ScoreText = styled.h1`
  font-size: 10rem;
  font-weight: 200;
  margin: 0;

  > span {
    font-size: 3rem;
  }
`;

const QrButton = styled.button`
  border: none;
  width: 100%;
  background-color: rgba(0, 0, 0, 0);

  > svg {
    width: 4rem;
    fill: #fff;
  }
`;

const DashboardContainer = () => {
  const [isShowingQrScanner, setIsShowingQrScanner] = useState(false);

  const getDay = useCallback(() => {
    // TODO implement
    return 1;
  }, []);

  return isShowingQrScanner ? (
    <QrCodeReader />
  ) : (
    <Container>
      <div>
        <DayContainer>Day {getDay()}</DayContainer>
        <PuzzleTitle>Mazes</PuzzleTitle>
      </div>
      <div>
        <LightText>You have completed</LightText>
        <ScoreText>
          0<span>/4</span>
        </ScoreText>
        <LightText>puzzles</LightText>
      </div>
      <QrButton onClick={() => setIsShowingQrScanner(true)}>
        <QrCodeIcon />
      </QrButton>
    </Container>
  );
};

export default DashboardContainer;
