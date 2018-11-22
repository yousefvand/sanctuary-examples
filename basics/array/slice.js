const S = require('sanctuary')

/*
slice
Returns an array with elements from given startIndex to endIndex if possible.
Since there may not be such an array, return type is a `Maybe`
which can be either a `Just` or a `Nothing`.
*/
const result = S.slice(2)(5)([1, 2, 3, 4, 5, 6, 7, 8, 9])
console.log(result) // Just ([3, 4, 5])

/*
flip
Swaps parameters in curried version.
*/

// Suppose you need a function which slices an array from given index to 5th index:
const upToFifth = S.flip(S.slice)(5)

// Now if you need a function to slice from index 3 to 5
const from3rthIndexTo5th = upToFifth(3)

console.log(from3rthIndexTo5th([1, 2, 3, 4, 5, 6, 7, 8, 9])) // Just ([4, 5])
