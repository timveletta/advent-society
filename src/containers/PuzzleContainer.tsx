import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Connect } from "aws-amplify-react";
import { graphqlOperation, API } from "aws-amplify";
import styled from "styled-components";
import Explosion from "react-explode/Explosion1";
import Puzzle from "../components/Puzzle";
import Controls from "../components/Controls";
import { getPuzzle } from "../graphql/queries";
import { IConnectState } from "aws-amplify-react/lib-esm/API/GraphQL/Connect";
import { GetPuzzleQuery, GetPuzzleQueryVariables } from "../API";
import { puzzleComplete } from "../graphql/mutations";

const Container = styled.div`
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
  const history = useHistory();
  const { id } = useParams();
  const [inputs, setInputs] = useState<Array<"up" | "down" | "left" | "right">>(
    []
  );
  const [isPuzzleSolved, setIsPuzzleSolved] = useState<boolean>(false);

  const addInput = (input: "up" | "down" | "left" | "right") => {
    setInputs(i => i.concat([input]));
  };

  const onPuzzleSolved = () => {
    setIsPuzzleSolved(true);
  };

  const onExplosionComplete = async () => {
    await API.graphql(
      graphqlOperation(puzzleComplete, {
        id
      })
    );
    history.push("/dashboard");
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
          <Container>
            {isPuzzleSolved ? (
              <Explosion
                size={window.innerWidth}
                delay={0}
                repeatDelay={0.1}
                repeat={5}
                onComplete={async () => await onExplosionComplete()}
              />
            ) : (
              <>
                <Puzzle
                  inputs={inputs}
                  puzzleMap={puzzle.map}
                  columns={puzzle.columns}
                  solution={puzzle.solution.map(c => c && { x: c.x, y: c.y })}
                  onPuzzleSolved={onPuzzleSolved}
                  collect={
                    puzzle.details &&
                    puzzle.details.collect &&
                    puzzle.details.collect.map(c => c && { x: c.x, y: c.y })
                  }
                  blocks={
                    puzzle.details &&
                    puzzle.details.block &&
                    puzzle.details.block.map(
                      b =>
                        b && {
                          x: b.x,
                          y: b.y,
                          color: b.color
                        }
                    )
                  }
                />
                <Controls
                  color={"#ffffff"}
                  onUp={() => addInput("up")}
                  onDown={() => addInput("down")}
                  onLeft={() => addInput("left")}
                  onRight={() => addInput("right")}
                />
              </>
            )}
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
