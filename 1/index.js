function average(values) {

  const average = (values.reduce((acc, val) => acc + val, 0) / values.length)

  return {
    average,
    quantity: values.filter(value => value > average).length};
}

console.table(average([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));