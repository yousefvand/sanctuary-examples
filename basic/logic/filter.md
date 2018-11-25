# [Logic](../README.md)

## filter

`filter` Returns a copy of input container elements except the ones which does not satisfy the predicate.

```js
const S = require('sanctuary')

const oddFilter = S.filter(S.odd)
console.log(oddFilter([1, 2, 3, 4, 5])) // [ 1, 3, 5 ]

const adultFilter = S.filter(x => x.age >= 18)
const alice = { name: 'Alice', age: 16 }
const bob = { name: 'Bob', age: 23 }
const eve = { name: 'Eve', age: 15 }

console.log(adultFilter([ alice, bob, eve ])) // [ { name: 'Bob', age: 23 } ]
```

----------

Back to

- [Logic](README.md)

- [Basic](../README.md)

- [Main](../../README.md)
