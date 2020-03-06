function sumNumberFirstColumn(values) {
  return values.reduce((acc, val, index) => acc + val[0], 0);
}

console.log("Amount: " + sumNumberFirstColumn([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));