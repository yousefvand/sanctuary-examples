const S = require('sanctuary')

/*
I (identity)
Returns given argument.
*/

const add3 = S.add(3)
const result = S.I(add3)(2)

console.log(result) // 5

console.log(S.I(9)) // 9
