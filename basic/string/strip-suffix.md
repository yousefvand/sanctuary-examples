# [String](../README.md)

## stripSuffix

`stripSuffix` function removes given suffix from string and returns the rest. Since there may not be a result, return type is a `Maybe` which can be either a `Just` or a `Nothing`.

```js
const S = require('sanctuary')

console.log(S.stripSuffix('.com')('google.com')) // Just ("google")
console.log(S.stripSuffix('.org')('google.com')) // Nothing
```

----------

Back to

- [String](README.md)

- [Basic](../README.md)

- [Main](../../README.md)
