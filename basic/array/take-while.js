const S = require('sanctuary')

/*
takeWhile
Returns the array of elements from beginning until predicate returns true.
*/

// predicate: S.odd
// We are interested in members while they are odd
console.log(S.takeWhile(S.odd)([7, 3, 5, 8, 10])) // [ 7, 3, 5 ]

// predicate: x => x !== 6
// We are interested in members while they are not equal to six
console.log(S.takeWhile(x => x !== 6)([1, 2, 3, 4, 5, 6, 7, 8, 9])) // [ 1, 2, 3, 4, 5 ]
