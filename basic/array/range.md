# [Array](../README.md)

## range

`range` function returns an array of consecutive integers starting at first argument and ending at the second argument minus one. Returns empty array if the second argument is less than or equal to the first argument.

```js
const S = require('sanctuary')

console.log(S.range(2)(5)) // [ 2, 3, 4 ]
console.log(S.range(8)(4)) // []
```

----------

Back to

- [Array](README.md)

- [Basic](../README.md)

- [Main](../../README.md)
