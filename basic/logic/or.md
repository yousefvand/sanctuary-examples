# [Logic](../README.md)

## or

`or` returns the result of a logical `OR` (||).

|  OR  | True  | False |
|------|-------|-------|
| True | True  | True  |
|False | True  | False |

```js
const S = require('sanctuary')

/*
or
Returns the result of a logical `OR` (||).
*/

console.log(S.or(true)(true))   // true
console.log(S.or(true)(false))  // true
console.log(S.or(false)(true))  // true
console.log(S.or(false)(false)) // false
```

----------

Back to

- [Logic](README.md)

- [Basic](../README.md)

- [Main](../../README.md)
