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
