# [Types](../README.md)

## is

`is` function returns true if the given value is a member of the specified type, otherwise false.

```js
const S = require('sanctuary')
const $ = require('sanctuary-def')

console.log(S.is($.String)('Sanctuary')) // true
console.log(S.is($.Number)('Sanctuary')) // false
console.log(S.is($.Array($.Integer))([1, 2, 3])) // true
console.log(S.is($.Array($.Integer))(['hello', 'world'])) // false
console.log(S.is($.Array($.Array($.Integer)))([[1], [1, 2], [3, 4]])) // true
```

----------

Back to

- [Types](README.md)

- [Basic](../README.md)

- [Main](../../README.md)
