const S = require('sanctuary')

/*
equals
Compares two arguments of the same type and returns true if they are equal.
*/

console.log(S.equals(3)(3)) // true
console.log(S.equals('sanctuary')('sanctuary')) // true
console.log(S.equals('sanctuary')('Sanctuary')) // false
console.log(S.equals(NaN)(NaN)) // true
