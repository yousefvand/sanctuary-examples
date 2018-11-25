const S = require('sanctuary')

/*
unlines
Returns a string made out of input array members joined by '\n'.
*/

const result = S.unlines([
  'lines example:',
  'This is the 2nd line.',
  'This is the 3rd line.'
])

console.log(result)

/* Output array of words:
lines example:
This is the 2nd line.
This is the 3rd line.
*/
