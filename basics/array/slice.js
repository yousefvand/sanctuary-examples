const S = require('sanctuary')

/*
slice
Returns an array with elements from given startIndex to endIndex if possible.
Since there may not be such an array, return type is a `Maybe`
which can be either a `Just` or a `Nothing`.
*/
const result = S.slice(2)(5)([1, 2, 3, 4, 5, 6, 7, 8, 9])
console.log(result) // Just ([3, 4, 5])
