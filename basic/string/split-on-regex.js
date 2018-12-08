const S = require('sanctuary')

/*
splitOnRegex
Returns an array of substrings from second string splitted based on given regex.
*/

const dateExtractor = S.splitOnRegex(/[.,/ -]/g)

console.log(dateExtractor('2018-12-09')) // [ '2018', '12', '09' ]
console.log(dateExtractor('2018.12.09')) // [ '2018', '12', '09' ]
console.log(dateExtractor('2018/12/09')) // [ '2018', '12', '09' ]