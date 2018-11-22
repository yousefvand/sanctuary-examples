# [Math](../README.md)

## sub

`sub` function subtracts first number from the second and returns the result.

```js
const S = require('sanctuary')

/*
sub
subtracts first number from the second one and returns the result.
*/

// Create a function that subtracts 3 from any given number
const sub3 = S.sub(3)

const result = sub3(8)

console.log(result) // 5

/*
flip
Swaps parameters in curried version.
*/

// Suppose you need a function which always subtracts given number from 10:
const subFrom10 = S.flip(S.sub)(10)

// Now if you need to subtract 8 from 10
console.log(subFrom10(8)) // 2
```

----------

Back to

- [Math](README.md)

- [Basics](../README.md)

- [Main](../../README.md)
