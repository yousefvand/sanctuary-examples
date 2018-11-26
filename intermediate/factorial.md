# Given any number, return the factorial (product of 1 to given number)

We need to compute the result of `1 * 2 * 3 * ... * n`.

How to produce an array of `1 to n`? `S.range(1)(n+1)`
How to multiply all members of the array? `S.product`

Steps to transform input `Number` into output `factorial` (morphisms):

- `4`

- `[1, 2, 3, 4]`

- `1 * 2 * 3 * 4`

- `24`

used functions:

- pipe

- range

- add

- product

```js
const S = require('sanctuary')

factorial = S.pipe([
  S.add(1),
  S.range(1),
  S.product
])

// 1 * 2 * 3
console.log(factorial(3)) // 6

// 1 * 2 * 3 * 4
console.log(factorial(4)) // 24
```

----------

Back to

- [Intermediate](README.md)

- [Main](../README.md)