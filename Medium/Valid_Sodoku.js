/**
 * @param {character[][]} board
 * @return {boolean}
 */
// Method 1: Brute force
var isValidSudoku = function (board) {
  for (let row = 0; row < 9; row++) {
    const check = new Set()
    for (let i = 0; i < 9; i++) {
      if (board[row][i] === '.') continue
      if (check.has(board[row][i])) return false
      check.add(board[row][i])
    }
  }

  for (let col = 0; col < 9; col++) {
    const check = new Set()
    for (let i = 0; i < 9; i++) {
      if (board[i][col] === '.') continue
      if (check.has(board[i][col])) return false
      check.add(board[i][col])
    }
  }

  for (let square = 0; square < 9; square++) {
    let startRow = Math.floor(square / 3) * 3
    let startCol = (square % 3) * 3
    const check = new Set()
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let row = startRow + i
        let col = startCol + j
        if (board[row][col] === '.') continue
        if (check.has(board[row][col])) return false
        check.add(board[row][col])
      }
    }
  }

  return true
}

// Method 2: Hash Set

var isValidSudoku = function (board) {
  const rows = new Map()
  const cols = new Map()
  const squares = new Map()
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === '.') continue

      let coordi = `${Math.floor(i / 3)},${Math.floor(j / 3)}`
      let val = board[i][j]
      if (
        (rows.get(i) && rows.get(i).has(val)) ||
        (cols.get(j) && cols.get(j).has(val)) ||
        (squares.get(coordi) && squares.get(coordi).has(val))
      ) {
        return false
      }

      if (!rows.has(i)) rows.set(i, new Set())
      if (!cols.has(j)) cols.set(j, new Set())
      if (!squares.has(coordi)) squares.set(coordi, new Set())

      rows.get(i).add(val)
      cols.get(j).add(val)
      squares.get(coordi).add(val)
    }
  }

  return true
}

board = [
  ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
]

console.log(isValidSudoku(board))
