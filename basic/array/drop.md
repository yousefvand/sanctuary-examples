# [Array](../README.md)

## drop

`drop` function returns a copy of input array without `N` first elements, if possible. To handle _if possible_ this function either returns a `Just<Array>` or a `Nothing`. The result is captured inside a container named [Maybe](../COMINGSOON.md). If you want to free it up please refer to [fromMaybe](../COMINGSOON.md).

```js
const S = require('sanctuary')

const result = S.drop(3)([1, 2, 3, 4, 5, 6, 7, 8, 9])
console.log(result) // Just ([4, 5, 6, 7, 8, 9])

/*
fromMaybe
Tries to extract inner value of `Just` from inside a `Maybe`.
First parameter of function is the default value to return
in case there is `Nothing` in `Maybe` type.
*/
const output = S.fromMaybe([])(result)
console.log(output) // [ 4, 5, 6, 7, 8, 9 ]


// trying to drop first 12 elements of an array with 9 elements results in Nothing (impossible).
const resultEmpty = S.drop(12)([1, 2, 3, 4, 5, 6, 7, 8, 9])
console.log(resultEmpty) // Nothing
// Used default value of [100, 200] in case fromMaybe tries to extract Nothing.
const outputEmpty = S.fromMaybe([100, 200])(resultEmpty)
console.log(outputEmpty) // [100, 200]

/*
unchecked
Sanctuary type checking forces you to use a default value of the same type
of array elements. If this is not intended you can bypass type checking by
using `unchecked`.
*/
const outputEmptyUnchecked = S.unchecked.fromMaybe('Drop impossible')(resultEmpty)
console.log(outputEmptyUnchecked) // Drop impossible
```

----------

Back to

- [Array](README.md)

- [Basic](../README.md)

- [Main](../../README.md)
