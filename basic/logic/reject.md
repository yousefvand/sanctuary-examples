# [Logic](../README.md)

## reject

`reject` Returns a copy of input container elements except the ones which satisfy the predicate.

```js
const S = require('sanctuary')

const oddReject = S.reject(S.odd)
console.log(oddReject([1, 2, 3, 4, 5])) // [ 2, 4 ]

const adultReject = S.reject(x => x.age >= 18)
const alice = { name: 'Alice', age: 16 }
const bob = { name: 'Bob', age: 23 }
const eve = { name: 'Eve', age: 15 }

console.log(adultReject([ alice, bob, eve ]))
// [ { name: 'Alice', age: 16 }, { name: 'Eve', age: 15 } ]
```

----------

Back to

- [Logic](README.md)

- [Basic](../README.md)

- [Main](../../README.md)
