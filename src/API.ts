/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreatePuzzleInput = {
  id?: string | null,
  map: string,
  columns: number,
  solution: Array< CoordinatesInput | null >,
  currentDay?: number | null,
  isComplete?: boolean | null,
  colors?: ColorsInput | null,
  details?: DetailsInput | null,
};

export type CoordinatesInput = {
  x: number,
  y: number,
};

export type ColorsInput = {
  background?: string | null,
  primary?: string | null,
  secondary?: string | null,
  line?: string | null,
};

export type DetailsInput = {
  collect?: Array< CoordinatesInput | null > | null,
  block?: Array< BlocksInput | null > | null,
  stars?: Array< BlocksInput | null > | null,
};

export type BlocksInput = {
  x: number,
  y: number,
  color: string,
};

export type UpdatePuzzleInput = {
  id: string,
  map?: string | null,
  columns?: number | null,
  solution?: Array< CoordinatesInput | null > | null,
  currentDay?: number | null,
  isComplete?: boolean | null,
  colors?: ColorsInput | null,
  details?: DetailsInput | null,
};

export type DeletePuzzleInput = {
  id?: string | null,
};

export type ModelPuzzleFilterInput = {
  id?: ModelIDFilterInput | null,
  map?: ModelStringFilterInput | null,
  columns?: ModelIntFilterInput | null,
  currentDay?: ModelIntFilterInput | null,
  isComplete?: ModelBooleanFilterInput | null,
  and?: Array< ModelPuzzleFilterInput | null > | null,
  or?: Array< ModelPuzzleFilterInput | null > | null,
  not?: ModelPuzzleFilterInput | null,
};

export type ModelIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelIntFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  contains?: number | null,
  notContains?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanFilterInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type PuzzleCompleteMutationVariables = {
  id: string,
};

export type PuzzleCompleteMutation = {
  puzzleComplete:  {
    __typename: "Puzzle",
    id: string,
    map: string,
    columns: number,
    solution:  Array< {
      __typename: "Coordinates",
      x: number,
      y: number,
    } | null >,
    currentDay: number | null,
    isComplete: boolean | null,
    colors:  {
      __typename: "Colors",
      background: string | null,
      primary: string | null,
      secondary: string | null,
      line: string | null,
    } | null,
    details:  {
      __typename: "Details",
      collect:  Array< {
        __typename: "Coordinates",
        x: number,
        y: number,
      } | null > | null,
      block:  Array< {
        __typename: "Blocks",
        x: number,
        y: number,
        color: string,
      } | null > | null,
      stars:  Array< {
        __typename: "Blocks",
        x: number,
        y: number,
        color: string,
      } | null > | null,
    } | null,
  } | null,
};

export type CreatePuzzleMutationVariables = {
  input: CreatePuzzleInput,
};

export type CreatePuzzleMutation = {
  createPuzzle:  {
    __typename: "Puzzle",
    id: string,
    map: string,
    columns: number,
    solution:  Array< {
      __typename: "Coordinates",
      x: number,
      y: number,
    } | null >,
    currentDay: number | null,
    isComplete: boolean | null,
    colors:  {
      __typename: "Colors",
      background: string | null,
      primary: string | null,
      secondary: string | null,
      line: string | null,
    } | null,
    details:  {
      __typename: "Details",
      collect:  Array< {
        __typename: "Coordinates",
        x: number,
        y: number,
      } | null > | null,
      block:  Array< {
        __typename: "Blocks",
        x: number,
        y: number,
        color: string,
      } | null > | null,
      stars:  Array< {
        __typename: "Blocks",
        x: number,
        y: number,
        color: string,
      } | null > | null,
    } | null,
  } | null,
};

export type UpdatePuzzleMutationVariables = {
  input: UpdatePuzzleInput,
};

export type UpdatePuzzleMutation = {
  updatePuzzle:  {
    __typename: "Puzzle",
    id: string,
    map: string,
    columns: number,
    solution:  Array< {
      __typename: "Coordinates",
      x: number,
      y: number,
    } | null >,
    currentDay: number | null,
    isComplete: boolean | null,
    colors:  {
      __typename: "Colors",
      background: string | null,
      primary: string | null,
      secondary: string | null,
      line: string | null,
    } | null,
    details:  {
      __typename: "Details",
      collect:  Array< {
        __typename: "Coordinates",
        x: number,
        y: number,
      } | null > | null,
      block:  Array< {
        __typename: "Blocks",
        x: number,
        y: number,
        color: string,
      } | null > | null,
      stars:  Array< {
        __typename: "Blocks",
        x: number,
        y: number,
        color: string,
      } | null > | null,
    } | null,
  } | null,
};

export type DeletePuzzleMutationVariables = {
  input: DeletePuzzleInput,
};

export type DeletePuzzleMutation = {
  deletePuzzle:  {
    __typename: "Puzzle",
    id: string,
    map: string,
    columns: number,
    solution:  Array< {
      __typename: "Coordinates",
      x: number,
      y: number,
    } | null >,
    currentDay: number | null,
    isComplete: boolean | null,
    colors:  {
      __typename: "Colors",
      background: string | null,
      primary: string | null,
      secondary: string | null,
      line: string | null,
    } | null,
    details:  {
      __typename: "Details",
      collect:  Array< {
        __typename: "Coordinates",
        x: number,
        y: number,
      } | null > | null,
      block:  Array< {
        __typename: "Blocks",
        x: number,
        y: number,
        color: string,
      } | null > | null,
      stars:  Array< {
        __typename: "Blocks",
        x: number,
        y: number,
        color: string,
      } | null > | null,
    } | null,
  } | null,
};

export type PuzzlesForDayQueryVariables = {
  day: number,
};

export type PuzzlesForDayQuery = {
  puzzlesForDay:  Array< {
    __typename: "Puzzle",
    id: string,
    map: string,
    columns: number,
    solution:  Array< {
      __typename: "Coordinates",
      x: number,
      y: number,
    } | null >,
    currentDay: number | null,
    isComplete: boolean | null,
    colors:  {
      __typename: "Colors",
      background: string | null,
      primary: string | null,
      secondary: string | null,
      line: string | null,
    } | null,
    details:  {
      __typename: "Details",
      collect:  Array< {
        __typename: "Coordinates",
        x: number,
        y: number,
      } | null > | null,
      block:  Array< {
        __typename: "Blocks",
        x: number,
        y: number,
        color: string,
      } | null > | null,
      stars:  Array< {
        __typename: "Blocks",
        x: number,
        y: number,
        color: string,
      } | null > | null,
    } | null,
  } | null > | null,
};

export type GetPuzzleQueryVariables = {
  id: string,
};

export type GetPuzzleQuery = {
  getPuzzle:  {
    __typename: "Puzzle",
    id: string,
    map: string,
    columns: number,
    solution:  Array< {
      __typename: "Coordinates",
      x: number,
      y: number,
    } | null >,
    currentDay: number | null,
    isComplete: boolean | null,
    colors:  {
      __typename: "Colors",
      background: string | null,
      primary: string | null,
      secondary: string | null,
      line: string | null,
    } | null,
    details:  {
      __typename: "Details",
      collect:  Array< {
        __typename: "Coordinates",
        x: number,
        y: number,
      } | null > | null,
      block:  Array< {
        __typename: "Blocks",
        x: number,
        y: number,
        color: string,
      } | null > | null,
      stars:  Array< {
        __typename: "Blocks",
        x: number,
        y: number,
        color: string,
      } | null > | null,
    } | null,
  } | null,
};

export type ListPuzzlesQueryVariables = {
  filter?: ModelPuzzleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPuzzlesQuery = {
  listPuzzles:  {
    __typename: "ModelPuzzleConnection",
    items:  Array< {
      __typename: "Puzzle",
      id: string,
      map: string,
      columns: number,
      solution:  Array< {
        __typename: "Coordinates",
        x: number,
        y: number,
      } | null >,
      currentDay: number | null,
      isComplete: boolean | null,
      colors:  {
        __typename: "Colors",
        background: string | null,
        primary: string | null,
        secondary: string | null,
        line: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};
