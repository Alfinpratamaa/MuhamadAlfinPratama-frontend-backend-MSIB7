const calculateSum = (m) => {
  let n = m.length;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += m[i][i];
    if (i !== n - i - 1) {
      sum += m[i][n - i - 1];
    }
  }
  return sum;
};

//contoh no 1
const matrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]; // 25

console.log("hasil untuk contoh no 1 = ", calculateSum(matrix1));

//contoh no 2
const matrix2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
]; // 68

console.log("hasil untuk contoh no 2 = ", calculateSum(matrix2));
