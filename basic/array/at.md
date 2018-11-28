# [Array](../README.md)

## at

`at` function returns the element of an array in specified index, if possible. To handle _if possible_ this function either returns a `Just<Element>` or a `Nothing`. The result is captured inside a container named [Maybe](../COMINGSOON.md). If you want to free it up please refer to [fromMaybe](../COMINGSOON.md).

```js
const S = require('sanctuary')

/*
at
Returns the element of an array in specified index, if possible.
Since there may not be such an element, return type is a `Maybe`
which can be either a `Just` or a `Nothing`.
*/
console.log(S.at(1)([1, 2, 3])) // Just (2)

/*
fromMaybe
Tries to extract inner value of `Just` from inside a `Maybe`.
First parameter of function is the default value to return
in case there is `Nothing` in `Maybe` type.
*/
console.log(S.at(7)([1, 2, 3])) // Nothing

// Return default (99) if value of maybe is Nothing
console.log(S.fromMaybe(99)(S.at(7)([1, 2, 3]))) // 99
```

----------

Back to

- [Array](README.md)

- [Basic](../README.md)

- [Main](../../README.md)
