const S = require('sanctuary')

/*
and
Returns the result of a logical `AND` (&&).
*/

console.log(S.and(true)(true))   // true
console.log(S.and(true)(false))  // false
console.log(S.and(false)(true))  // false
console.log(S.and(false)(false)) // false
