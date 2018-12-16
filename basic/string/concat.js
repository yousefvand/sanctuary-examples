const S = require('sanctuary')

/*
concat
Returns the concatenated version of input Semigroups (Array, Object, String)
*/
console.log(S.concat([1, 2, 3])([4, 5])) // [ 1, 2, 3, 4, 5 ]
console.log(S.concat({ a: 1, b: 2, c: 3 })({ b: 13 })) // { a: 1, b: 13, c: 3 }
console.log(S.concat('abc')('123')) // abc123
