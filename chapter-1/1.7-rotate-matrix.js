/*
input: [[1,2,3],
        [4,5,6],
        [7,8,9]]

output: [[7,4,1],
         [8,5,2],
         [9,6,3]]
*/

const rotateMatrix = (matrix) => {
  const N = matrix.length;
  const arr = createEmptyArr(N);

  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      if (r === 0) {
        arr[c][N - 1] = matrix[r][c];
      } else if (r === N - 1) {
        arr[c][0] = matrix[r][c];
      } else {
        arr[c][N - r - 1] = matrix[r][c];
      }
    }
  }

  return arr;
};

const createEmptyArr = (n) => {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push([]);
    for (let j = 0; j < n; j++) {
      arr[i].push(0);
    }
  }
  return arr;
};

//tests
console.log(
  JSON.stringify(
    rotateMatrix([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ])
  ) ==
    JSON.stringify([
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3]
    ])
);

console.log(
  JSON.stringify(
    rotateMatrix([
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16]
    ])
  ) ==
    JSON.stringify([
      [13, 9, 5, 1],
      [14, 10, 6, 2],
      [15, 11, 7, 3],
      [16, 12, 8, 4]
    ])
);

console.log(
  JSON.stringify(
    rotateMatrix([
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25]
    ])
  ) ==
    JSON.stringify([
      [21, 16, 11, 6, 1],
      [22, 17, 12, 7, 2],
      [23, 18, 13, 8, 3],
      [24, 19, 14, 9, 4],
      [25, 20, 15, 10, 5]
    ])
);
