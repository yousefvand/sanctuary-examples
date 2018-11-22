const S = require('sanctuary')

/*
takeLast
Returns the last N element(s) of an array if possible.
Since there may not be last N element(s), return type is a `Maybe`
which can be either a `Just` or a `Nothing`.
*/

const myArray = [1, 2, 3, 4, 5]

// A configured `takeLast` to return last 3 elements of the given array
const takeLast3 = S.takeLast(3)

const result = takeLast3(myArray)

console.log(result) // Just ([3, 4, 5])

/*
fromMaybe
Tries to extract inner value of `Just` from inside a `Maybe`.
First parameter of function is the default value to return
in case there is `Nothing` in `Maybe` type.
*/
const output = S.fromMaybe([])(result)
console.log(output) // [ 3, 4, 5 ]

// If we try to take first 3 elements on an array
// which has less than 3 members, we get `Nothing`
const resultNothing = takeLast3([1, 2])
console.log(resultNothing) // Nothing

// Try to extract inner value, otherwise return default array
const outputNothing = S.fromMaybe([7, 8, 9])(resultNothing)
console.log(outputNothing) // [ 7, 8, 9 ]
