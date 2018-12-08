const S = require('sanctuary')

/*
stripPrefix
Removes given prefix from string and returns the rest.
Since there may not be a result, return type is a `Maybe`
which can be either a `Just` or a `Nothing`.
*/

console.log(S.stripPrefix('Dr.')('Dr. Boolean')) // Just (" Boolean")
console.log(S.stripPrefix('Mr.')('Dr. Boolean')) // Nothing
