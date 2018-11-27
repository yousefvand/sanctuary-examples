# Find localized url version for a given user

We have a user object like this:

```js
const user = {
  name: 'Remisa',
  prefs: {
    lang: 'eo'
  }
}
```

It may be `null` or `undefined` or doesn't have `prefs` and/or `lang` properties.

These are desired urls based on user language preference:

```js
const urls = {
  en: 'http://example.com/en',
  eo: 'http://example.com/eo',
  jp: 'http://example.com/jp'
}
```

## Solution

used functions:

- pipe

- gets

- is

- chain

- flip

- fromMaybe

- prop

```js
const S = require('sanctuary')
const $ = require('sanctuary-def')

const user1 = {
  name: 'Eva',
  prefs: {
    lang: 'de'
  }
}

const user2 = {
  name: 'Remisa',
  prefs: {
    lang: 'eo'
  }
}

// urls :: StrMap String
const urls = {
  en: 'http://example.com/en',
  eo: 'http://example.com/eo',
  jp: 'http://example.com/jp'
}

// getURLForUser :: User -> String
const getURLForUser = S.pipe([
  S.gets(S.is($.String))(['prefs', 'lang']),
  S.chain(S.flip(S.get(S.K(true)))(urls)),
  S.fromMaybe(S.prop('en')(urls))
])

console.log(getURLForUser(user1)) // http://example.com/en
console.log(getURLForUser(user2)) // http://example.com/eo
```

----------

Back to

- [Intermediate](README.md)

- [Main](../README.md)