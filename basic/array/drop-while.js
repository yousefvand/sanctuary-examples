const S = require('sanctuary')

/*
dropWhile
Returns the array of elements discarding elements from beginning while predicate returns true.
*/

// predicate: S.odd
// We are not interested in members while they are odd
console.log(S.dropWhile(S.odd)([7, 3, 5, 8, 10])) // [ 8, 10 ]

// predicate: x => x !== 6
// We are not interested in members while they are not equal to six
console.log(S.dropWhile(x => x !== 6)([1, 2, 3, 4, 5, 6, 7, 8, 9])) // [ 6, 7, 8, 9 ]
