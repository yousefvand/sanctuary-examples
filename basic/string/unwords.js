const S = require('sanctuary')

/*
words
Returns an array of words based on input string.
*/

const result = S.unwords([
  'We',
  'are',
  'more',
  'in',
  'love',
  'with',
  'desire',
  'than',
  'desired'
])

console.log(result) // We are more in love with desire than desired
