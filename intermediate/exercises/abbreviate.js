const S = require('sanctuary')

/*
Given any strings, return the abbreviation.
Examples:
Don't repeat yourself  : D.R.Y
First in never out     : F.I.N.O
*/

const abbreviate = S.pipe([
  S.words, // Break string into array of words
  S.map(S.splitOn('')), // Break words to array of single characters
  S.mapMaybe(S.head), // Pick the first element of array of characters
  S.map(S.toUpper), // Convert the character to uppercase if possible
  S.joinWith('.') // Create a single string out of array of uppercase characters
])

console.log(abbreviate(`Don't repeat yourself`)) // D.R.Y
console.log(abbreviate('First in never out')) // F.I.N.O
