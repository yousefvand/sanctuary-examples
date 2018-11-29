# [Logic](../README.md)

## equals

`equals` compares two arguments of the same type and returns true if they are equal.

```js
const S = require('sanctuary')

console.log(S.equals(3)(3)) // true
console.log(S.equals('sanctuary')('sanctuary')) // true
console.log(S.equals('sanctuary')('Sanctuary')) // false
console.log(S.equals(NaN)(NaN)) // true
```

----------

Back to

- [Logic](README.md)

- [Basic](../README.md)

- [Main](../../README.md)
