const S = require('sanctuary')

/*
or
Returns the result of a logical `OR` (||).
*/

console.log(S.or(true)(true))   // true
console.log(S.or(true)(false))  // true
console.log(S.or(false)(true))  // true
console.log(S.or(false)(false)) // false
