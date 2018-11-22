const S = require('sanctuary')

/*
add
adds two number and returns the result.
*/

// Create a function that adds 3 to any given number
const add3 = S.add(3)

const result = add3(7)

console.log(result) // 10
