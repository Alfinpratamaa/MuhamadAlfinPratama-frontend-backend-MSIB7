const calculateSum = (m) =>
  m.reduce(
    (sum, row, i) =>
      sum + row[i] + (i !== m.length - i - 1 ? row[m.length - i - 1] : 0),
    0
  );

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
