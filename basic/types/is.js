const S = require('sanctuary')
const $ = require('sanctuary-def')

/*
is
If the given value is a member of the specified type returns true, otherwise false.
*/

console.log(S.is($.String)('Sanctuary')) // true
console.log(S.is($.Number)('Sanctuary')) // false
console.log(S.is($.Array($.Integer))([1, 2, 3])) // true
console.log(S.is($.Array($.Integer))(['hello', 'world'])) // false
console.log(S.is($.Array($.Array($.Integer)))([[1], [1, 2], [3, 4]])) // true
