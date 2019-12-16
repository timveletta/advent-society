// tslint:disable
// this is an auto generated file. This will be overwritten

export const puzzleComplete = `mutation PuzzleComplete($id: ID!) {
  puzzleComplete(id: $id) {
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
      block {
        x
        y
        color
      }
    }
  }
}
`;
export const createPuzzle = `mutation CreatePuzzle($input: CreatePuzzleInput!) {
  createPuzzle(input: $input) {
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
      block {
        x
        y
        color
      }
    }
  }
}
`;
export const updatePuzzle = `mutation UpdatePuzzle($input: UpdatePuzzleInput!) {
  updatePuzzle(input: $input) {
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
      block {
        x
        y
        color
      }
    }
  }
}
`;
export const deletePuzzle = `mutation DeletePuzzle($input: DeletePuzzleInput!) {
  deletePuzzle(input: $input) {
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
      block {
        x
        y
        color
      }
    }
  }
}
`;
