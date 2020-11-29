const zeroMatrix = (matrix) => {
  let rows = new Set();
  let cols = new Set();

  for (let m = 0; m < matrix.length; m++) {
    for (let n = 0; n < matrix[0].length; n++) {
      if (matrix[m][n] === 0) {
        rows.add(m);
        cols.add(n);
      }
    }
  }

  for (let m of rows) {
    for (let n = 0; n < matrix[0].length; n++) {
      matrix[m][n] = 0;
    }
  }

  for (let n of cols) {
    for (let m = 0; m < matrix.length; m++) {
      matrix[m][n] = 0;
    }
  }

  return matrix;
};

// tests
console.log(
  JSON.stringify(
    zeroMatrix([
      [1, 1, 0],
      [1, 0, 1],
      [0, 1, 1]
    ])
  ) ===
    JSON.stringify([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ])
);

console.log(
  JSON.stringify(
    zeroMatrix([
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 0, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1]
    ])
  ) ===
    JSON.stringify([
      [1, 0, 1, 1],
      [1, 0, 1, 1],
      [0, 0, 0, 0],
      [1, 0, 1, 1],
      [1, 0, 1, 1],
      [1, 0, 1, 1]
    ])
);
