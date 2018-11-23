const S = require('sanctuary')

/*
words
Returns an array of words based on input string.
*/

const result = S.words('We are more in love with desire than desired')

console.log(result)

/* Output array of words:
[ 'We',
  'are',
  'more',
  'in',
  'love',
  'with',
  'desire',
  'than',
  'desired'
]
*/
