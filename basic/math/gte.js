const S = require('sanctuary')

/*
gte
Greater than or equal. Returns true if first argument is greater than or equal to the second argument, otherwise returns false.
*/

// Create a function that asserts any given number is greater than or equal to 5
const greaterThanOrEqual5 = S.gte(5)

console.log(greaterThanOrEqual5(7)) // true
console.log(greaterThanOrEqual5(5)) // true
console.log(greaterThanOrEqual5(3)) // false
