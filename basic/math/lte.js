const S = require('sanctuary')

/*
lte
Less than or equal. Returns true if the first argument is less than or equal to the second argument, otherwise returns false.
*/

// Create a function that asserts any given number is less than or equal to 5
const lessThanOrEqual5 = S.lte(5)

console.log(lessThanOrEqual5(3)) // true
console.log(lessThanOrEqual5(5)) // true
console.log(lessThanOrEqual5(7)) // false
