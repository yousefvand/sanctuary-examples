const S = require('sanctuary')

/*
lines
Returns an array of lines based on input string.
*/

const result = S.lines(`lines example:
This is the 2nd line.
This is the 3rd line.`
)

console.log(result)

/* Output array of words:
[
  'lines example:',
  'This is the 2nd line.',
  'This is the 3rd line.'
]
*/
