# [Array](../README.md)

## flip

`flip` applies given function(s) to given value one by one.
This function works on an array of `function`s which is common in FP.

```js
const S = require('sanctuary')

/*
flip
Receives a function or an array of functions and a value.
Returns a value or an array of values after applying each
received function on received value.
In short, flip applies given function(s) to given value one by one.
*/
const add5 = S.add(5)
const multiplyBy2 = S.mult(2)
const negate = S.negate

const fns = [
  add5,
  multiplyBy2,
  negate
]

const result = S.flip(fns)(3)
console.log(result) // [ 8, 6, -3 ]

// flip with single function as array
console.log(S.flip([S.add(7)])(3)) // [ 10 ]

// flip with single function
console.log(S.flip(S.add)(9)(8)) // 17
```

----------

Back to

- [Array](README.md)

- [Basic](../README.md)

- [Main](../../README.md)
