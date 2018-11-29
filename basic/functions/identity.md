# [Functions](../README.md)

## I (identity)

`I` function returns given argument.

```js
const S = require('sanctuary')

const add3 = S.add(3)
const result = S.I(add3)(2)

console.log(result) // 5

console.log(S.I(9)) // 9
```

----------

Back to

- [Functions](README.md)

- [Basic](../README.md)

- [Main](../../README.md)
