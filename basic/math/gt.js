const S = require('sanctuary')

/*
gt
Greater than. Returns true if first argument is greater than second argument, otherwise returns false.
*/

// Create a function that asserts any given number is greater than 5
const greaterThan5 = S.gt(5)

console.log(greaterThan5(7)) // true
console.log(greaterThan5(3)) // false
