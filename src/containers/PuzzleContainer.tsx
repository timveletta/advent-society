import React, { useState } from "react";
import { Connect } from "aws-amplify-react";
import { graphqlOperation } from "aws-amplify";
import styled from "styled-components";
import Puzzle from "../components/Puzzle";
import Controls from "../components/Controls";
import { getPuzzle } from "../graphql/queries";
import { IConnectState } from "aws-amplify-react/lib-esm/API/GraphQL/Connect";
import { GetPuzzleQuery, GetPuzzleQueryVariables } from "../API";

const Container = styled.div`
  background-color: ${(p: { backgroundColor: string }) => p.backgroundColor};
  height: 100vh;
`;

/**
 * S - start point
 * E - end point
 * C - connector
 * A - anchor
 * 0 - empty
 */
const PuzzleContainer = () => {
  const [inputs, setInputs] = useState<Array<"up" | "down" | "left" | "right">>(
    []
  );

  const addInput = (input: "up" | "down" | "left" | "right") => {
    setInputs(i => i.concat([input]));
  };

  return (
    <Connect
      query={graphqlOperation(getPuzzle, {
        id: "5678"
      } as GetPuzzleQueryVariables)}
    >
      {({ data, loading, errors }: IConnectState) => {
        if (errors.length > 0) return <h3>Errors</h3>;
        if (loading) return <h3>Loading</h3>;

        const { getPuzzle: puzzle } = data as GetPuzzleQuery;

        return puzzle ? (
          <Container backgroundColor="#0984e3">
            <Puzzle
              inputs={inputs}
              puzzleMap={puzzle.map}
              columns={puzzle.columns}
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
          <h3>No puzzle found with that ID.</h3>
        );
      }}
    </Connect>
  );
};

export default PuzzleContainer;
