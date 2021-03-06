const S = require('sanctuary')

/*
sort
Returns a sorted version of input array.
*/

const resultNums = S.sort([1, 3, 2])
console.log(resultNums) // [ 1, 2, 3 ]

const resultChars = S.sort(['b', 'a', 'c'])
console.log(resultChars) // [ 'a', 'b', 'c' ]

// Now with an empty array

const resultEmpty = S.sort([])
console.log(resultEmpty) // []
