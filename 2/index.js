function pairs(values) {
  return values.filter(value => value%2 === 0).length;
}

console.log('Quantity: ' + pairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));