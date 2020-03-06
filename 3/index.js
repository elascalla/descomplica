function qtdStartsWithX(values) {
  return values.filter(value => value.match('^(x|X)')).length;
}

console.log('Quantity: ' + qtdStartsWithX(['teste', 'xtestex', 'XTestex']));