# [Math](../README.md)

## div

`div` function divides second number by first one and returns the result.

```js
const S = require('sanctuary')

// Create a function that divides any given number by 3:
const divideBy3 = S.div(3)

const result = divideBy3(21)

console.log(result) // 7

/*
flip
Swaps parameters in curried version.
*/

// Suppose you need a function which always divides 24 by given number:
const divide24By = S.flip(S.div)(24)

// Now if you need to subtract 8 from 10
console.log(divide24By(8)) // 3

```

----------

Back to

- [Math](README.md)

- [Basics](../README.md)

- [Main](../../README.md)
