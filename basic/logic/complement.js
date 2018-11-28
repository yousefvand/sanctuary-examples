const S = require('sanctuary')

/*
complement
Returns the negate (complement) function of the given function.
*/

const alwaysTrue = x => true
const alwaysFalse = S.complement(alwaysTrue)

console.log(alwaysTrue(1))  // true
console.log(alwaysTrue(2))  // true
console.log(alwaysFalse(1)) // false
console.log(alwaysFalse(2)) // false

// Define odds according to evens
const isEven = x => x % 2 === 0
const isOdd = S.complement(isEven) // if it is not even then it is odd

console.log(isOdd(5)) // true
