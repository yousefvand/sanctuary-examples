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
  S.gets(S.is($.String))(['prefs', 'lang']), // read object property of 'prefs/lang' if possible
  S.chain(S.flip(S.get(S.K(true)))(urls)), // get url based n user 'prefs/lang'
  S.fromMaybe(S.prop('en')(urls)) // default lang is 'en' in case of Nothing
])

console.log(getURLForUser(user1)) // http://example.com/en
console.log(getURLForUser(user2)) // http://example.com/eo
