function newVector(values) {
  return values.map(value => value * -1);
}

console.log('New array: ' + newVector([1, 2, 3, -4, 5, 6, 7, -8, 9, 10]));