const S = require('sanctuary')

/*
pow
Exponentiates first number to the second number as power and returns the result.
*/
const cube = S.pow(3)
const result = cube(2)

console.log(result) // 8

/*
flip
Swaps parameters in curried version.
*/

// Suppose you need a function which always exponentiates 7 to the given number:
const pow7Base = S.flip(S.pow)(7)

// Now if you need to subtract 8 from 10
console.log(pow7Base(2)) // 49
