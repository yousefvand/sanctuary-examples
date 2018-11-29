# [Functions](../README.md)

## map

`map` function applies the given function to given structure.

```js
const S = require('sanctuary')

const add3 = S.add(3) // add 3
const mult2 = S.mult(2) // multiply by 2

console.log(S.map(add3)([1, 2, 3])) // [ 4, 5, 6 ]
console.log(S.map(mult2)([3, 5, 7])) // [ 6, 10, 14 ]
```

----------

Back to

- [Functions](README.md)

- [Basic](../README.md)

- [Main](../../README.md)
