// tslint:disable
// this is an auto generated file. This will be overwritten

export const puzzlesForDay = `query PuzzlesForDay($day: Int!) {
  puzzlesForDay(day: $day) {
    id
    map
    columns
    solution {
      x
      y
    }
    currentDay
    isComplete
    colors {
      background
      primary
      secondary
      line
    }
    details {
      collect {
        x
        y
      }
    }
  }
}
`;
export const getPuzzle = `query GetPuzzle($id: ID!) {
  getPuzzle(id: $id) {
    id
    map
    columns
    solution {
      x
      y
    }
    currentDay
    isComplete
    colors {
      background
      primary
      secondary
      line
    }
    details {
      collect {
        x
        y
      }
    }
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
      solution {
        x
        y
      }
      currentDay
      isComplete
      colors {
        background
        primary
        secondary
        line
      }
    }
    nextToken
  }
}
`;
