# [String](../README.md)

## splitOn

`splitOn` function returns an array of substrings from second string splitted based on first string.

```js
const S = require('sanctuary')

console.log(S.splitOn('-')('2018-12-09')) // [ '2018', '12', '09' ]

console.log(S.splitOn(' ')('ending is everything')) // [ 'ending', 'is', 'everything' ]

// S.words = S.splitOn(' ')
// S.lines = S.splitOn('\n')
```

----------

Back to

- [String](README.md)

- [Basic](../README.md)

- [Main](../../README.md)
