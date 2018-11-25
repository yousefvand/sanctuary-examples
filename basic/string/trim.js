const S = require('sanctuary')

/*
trim
Returns a copy of input string without leading and trailing whitespace if any.
*/

const result = S.trim('   no leading and trailing white space   ')
console.log(result) // "no leading and trailing white space"
