# [String](../README.md)

## lines

`lines` function returns an array of lines based on input string.

```js
const S = require('sanctuary')

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
```

----------

Back to

- [String](README.md)

- [Basic](../README.md)

- [Main](../../README.md)
