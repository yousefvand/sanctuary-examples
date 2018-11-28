# [Logic](../README.md)

## and

`and` returns the result of a logical `AND` (&&).

| AND  | True  | False |
|------|-------|-------|
| True | True  | False |
|False | False | False |

```js
const S = require('sanctuary')

console.log(S.and(true)(true))   // true
console.log(S.and(true)(false))  // false
console.log(S.and(false)(true))  // false
console.log(S.and(false)(false)) // false
```

----------

Back to

- [Logic](README.md)

- [Basic](../README.md)

- [Main](../../README.md)
