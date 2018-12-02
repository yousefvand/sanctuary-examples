# Given any strings, return the word count

What we need to perform on a `String` to know how many words the string is made of?

Example: 'Harsh reality is always better than false hope': 8

Steps to transform input `String` into output `Number` (morphisms):

- Using `S.words` we can break the input string into an array of its words.

- Length of `S.words` array is our answer

used functions:

- pipe

- words

- size

```js
const S = require('sanctuary')

const sample = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
unknown printer took a galley of type and scrambled it to make a type specimen book.
It has survived not only five centuries, but also the leap into electronic typesetting,
remaining essentially unchanged. It was popularised in the 1960s with the release of 
Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
software like Aldus PageMaker including versions of Lorem Ipsum.`

const wordCount = S.pipe([
  S.words,
  S.size
])

console.log(wordCount(sample)) // 91
```

----------

Back to

- [Exercises](README.md)

- [Main](../../README.md)