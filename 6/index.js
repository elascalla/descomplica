function vectorWithX(values) {
  return values.map(value => value.match('^(x|X)') ? value : ('x' + value));
}

console.log('New array: ' + vectorWithX(['teste', 'xtestex', 'XTestex', 'teste2']));