function sumOddIndexes(values) {
  return values.reduce((acc, val, index) => index%2 == 1 ? acc + val : acc + 0, 0);
}

console.log('Amount: ' + sumOddIndexes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));