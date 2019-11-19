// tslint:disable
// this is an auto generated file. This will be overwritten

export const getPuzzle = `query GetPuzzle($id: ID!) {
  getPuzzle(id: $id) {
    id
    map
    columns
  }
}
`;
export const listPuzzles = `query ListPuzzles(
  $filter: ModelPuzzleFilterInput
  $limit: Int
  $nextToken: String
) {
  listPuzzles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      map
      columns
    }
    nextToken
  }
}
`;
