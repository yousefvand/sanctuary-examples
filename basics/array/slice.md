# [Array](../README.md)

## slice

`slice` function returns an array with elements from given startIndex to endIndex if possible. To handle _if possible_ this function either returns a `Just<ElementsExceptFirst>` or a `Nothing`. The result is captured inside a container named [Maybe](../COMINGSOON.md). If you want to free it up please refer to [fromMaybe](../COMINGSOON.md).

```js
/*
slice
Returns an array with elements from given startIndex to endIndex if possible.
Since there may not be such an array, return type is a `Maybe`
which can be either a `Just` or a `Nothing`.
*/
const result = S.slice(2)(5)([1, 2, 3, 4, 5, 6, 7, 8, 9])
console.log(result) // Just ([3, 4, 5])
```

----------

Back to

- [Array](README.md)

- [Basics](../README.md)

- [Main](../../README.md)
