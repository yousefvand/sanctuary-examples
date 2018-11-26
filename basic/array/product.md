# [Array](../README.md)

## product

`product` function returns the product of input array elements.

```js
const S = require('sanctuary')

/*
product
Returns the product of input array elements.
*/

// Empty array
console.log(S.product([])) // 1 (identity)

// 1 * 2 * 3
console.log(S.product([1, 2, 3])) // 6

// If argument if not an array of finite numbers
// console.log(S.product(['a']))
// Type error: The value at position 1 is not a member of ‘FiniteNumber’.
```

----------

Back to

- [Array](README.md)

- [Basic](../README.md)

- [Main](../../README.md)
