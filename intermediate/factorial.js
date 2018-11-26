const S = require('sanctuary')

factorial = S.pipe([
  S.add(1),
  S.range(1),
  S.product
])

// 1 * 2 * 3
console.log(factorial(3)) // 6

// 1 * 2 * 3 * 4
console.log(factorial(4)) // 24