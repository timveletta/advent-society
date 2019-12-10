import React, { useState, useCallback } from "react";
import styled from "styled-components";
import QrCodeReader from "../components/QrCodeReader";
import { ReactComponent as QrCodeIcon } from "../qrcode.svg";
import { Connect } from "aws-amplify-react";
import { graphqlOperation } from "aws-amplify";
import { IConnectState } from "aws-amplify-react/lib-esm/API/GraphQL/Connect";
import { puzzlesForDay } from "../graphql/queries";
import { PuzzlesForDayQuery } from "../API";

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
    fill: #2ecc71;
  }
`;

const DashboardContainer = () => {
  const [isShowingQrScanner, setIsShowingQrScanner] = useState(false);

  const getDay = useCallback(() => {
    return new Date().getDate() - 12;
  }, []);

  return isShowingQrScanner ? (
    <QrCodeReader />
  ) : (
    <Connect
      query={graphqlOperation(puzzlesForDay, {
        day: getDay()
      })}
    >
      {({ data, loading, errors }: IConnectState) => {
        if (errors.length > 0)
          return (
            <Container>
              {errors.map(({ message }: { message: string }, index: number) => (
                <h3 key={index}>{message}</h3>
              ))}
            </Container>
          );
        if (loading)
          return (
            <Container>
              <h3>Loading...</h3>
            </Container>
          );

        const { puzzlesForDay: puzzles } = data as PuzzlesForDayQuery;
        const numberComplete: number = puzzles
          ? puzzles.filter(p => p && p.isComplete).length
          : 0;

        return (
          <Container>
            <div>
              <DayContainer>Day {getDay()}</DayContainer>
              <PuzzleTitle></PuzzleTitle>
            </div>
            <div>
              <LightText>You have completed</LightText>
              <ScoreText>
                {numberComplete}
                <span>/ {puzzles && puzzles.length}</span>
              </ScoreText>
              <LightText>puzzles</LightText>
            </div>
            <QrButton onClick={() => setIsShowingQrScanner(true)}>
              <QrCodeIcon />
            </QrButton>
          </Container>
        );
      }}
    </Connect>
  );
};

export default DashboardContainer;
