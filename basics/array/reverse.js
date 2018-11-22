const S = require('sanctuary')

/*
reverse
Returns a reverses version of input array.
*/

const result = S.reverse([1, 2, 3])
console.log(result) // [ 3, 2, 1 ]

// Now with an empty array

const resultEmpty = S.reverse([])
console.log(resultEmpty) // []
