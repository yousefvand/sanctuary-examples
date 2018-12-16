const S = require('sanctuary')

/*
Returns Empty value for provided type (Array, Object, String)
*/

console.log(S.empty(Array)) // []
console.log(S.empty(Object)) // {}
console.log(S.empty(String)) // ''
