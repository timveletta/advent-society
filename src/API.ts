/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreatePuzzleInput = {
  id?: string | null,
  map: string,
  width?: number | null,
};

export type UpdatePuzzleInput = {
  id: string,
  map?: string | null,
  width?: number | null,
};

export type DeletePuzzleInput = {
  id?: string | null,
};

export type ModelPuzzleFilterInput = {
  id?: ModelIDFilterInput | null,
  map?: ModelStringFilterInput | null,
  width?: ModelIntFilterInput | null,
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

export type CreatePuzzleMutationVariables = {
  input: CreatePuzzleInput,
};

export type CreatePuzzleMutation = {
  createPuzzle:  {
    __typename: "Puzzle",
    id: string,
    map: string,
    width: number | null,
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
    width: number | null,
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
    width: number | null,
  } | null,
};

export type GetPuzzleQueryVariables = {
  id: string,
};

export type GetPuzzleQuery = {
  getPuzzle:  {
    __typename: "Puzzle",
    id: string,
    map: string,
    width: number | null,
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
      width: number | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreatePuzzleSubscription = {
  onCreatePuzzle:  {
    __typename: "Puzzle",
    id: string,
    map: string,
    width: number | null,
  } | null,
};

export type OnUpdatePuzzleSubscription = {
  onUpdatePuzzle:  {
    __typename: "Puzzle",
    id: string,
    map: string,
    width: number | null,
  } | null,
};

export type OnDeletePuzzleSubscription = {
  onDeletePuzzle:  {
    __typename: "Puzzle",
    id: string,
    map: string,
    width: number | null,
  } | null,
};
