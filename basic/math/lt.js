const S = require('sanctuary')

/*
lt
Less than. Returns true if first argument is less than the second argument, otherwise returns false.
*/

// Create a function that asserts any given number is less than 5
const lessThan5 = S.lt(5)

console.log(lessThan5(3)) // true
console.log(lessThan5(7)) // false
