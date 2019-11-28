import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Connect } from "aws-amplify-react";
import { graphqlOperation } from "aws-amplify";
import styled from "styled-components";
import Puzzle from "../components/Puzzle";
import Controls from "../components/Controls";
import { getPuzzle } from "../graphql/queries";
import { IConnectState } from "aws-amplify-react/lib-esm/API/GraphQL/Connect";
import { GetPuzzleQuery, GetPuzzleQueryVariables } from "../API";

const Container = styled.div`
  background-color: ${(p: { backgroundColor?: string }) =>
    p.backgroundColor || "#333"};
  height: 100vh;
`;

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  h3 {
    color: #ffffff;
  }
`;

/**
 * S - start point
 * E - end point
 * C - connector
 * A - anchor
 * 0 - empty
 */
const PuzzleContainer: React.FC = () => {
  const { id } = useParams();
  const [inputs, setInputs] = useState<Array<"up" | "down" | "left" | "right">>(
    []
  );

  const addInput = (input: "up" | "down" | "left" | "right") => {
    setInputs(i => i.concat([input]));
  };

  const onPuzzleSolved = () => {
    console.log("puzzle solved");
  };

  return (
    <Connect
      query={graphqlOperation(getPuzzle, {
        id
      } as GetPuzzleQueryVariables)}
    >
      {({ data, loading, errors }: IConnectState) => {
        if (errors.length > 0)
          return (
            <MessageContainer>
              {errors.map(({ message }: { message: string }, index: number) => (
                <h3 key={index}>{message}</h3>
              ))}
            </MessageContainer>
          );
        if (loading)
          return (
            <MessageContainer>
              <h3>Loading...</h3>
            </MessageContainer>
          );

        const { getPuzzle: puzzle } = data as GetPuzzleQuery;

        return puzzle ? (
          <Container backgroundColor="#0984e3">
            <Puzzle
              inputs={inputs}
              puzzleMap={puzzle.map}
              columns={puzzle.columns}
              solution={puzzle.solution.map(c => c && { x: c.x, y: c.y })}
              onPuzzleSolved={onPuzzleSolved}
            />
            <Controls
              color={"#ffffff"}
              onUp={() => addInput("up")}
              onDown={() => addInput("down")}
              onLeft={() => addInput("left")}
              onRight={() => addInput("right")}
            />
          </Container>
        ) : (
          <MessageContainer>
            <h3>No puzzle found with that ID.</h3>
          </MessageContainer>
        );
      }}
    </Connect>
  );
};

export default PuzzleContainer;
