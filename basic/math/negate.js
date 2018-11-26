const S = require('sanctuary')

/*
negate
Returns input number multiplied by -1.
*/

console.log(S.negate(7)) // -7
console.log(S.negate(-2)) // 2
console.log(S.negate(0)) // -0
console.log(S.negate(-0)) // 0