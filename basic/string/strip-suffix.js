const S = require('sanctuary')

/*
stripSuffix
Removes given suffix from string and returns the rest.
Since there may not be a result, return type is a `Maybe`
which can be either a `Just` or a `Nothing`.
*/

console.log(S.stripSuffix('.com')('google.com')) // Just ("google")
console.log(S.stripSuffix('.org')('google.com')) // Nothing
