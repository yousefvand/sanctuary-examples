# Booleans, from imperative to declarative programming

One of the first things you will find missing after coming from [imperative](https://en.wikipedia.org/wiki/Imperative_programming) to [declarative](https://en.wikipedia.org/wiki/Declarative_programming) style of programming, are booleans (True, false) and the logic depending on them (if...else, loops...).

What happens to this building blocks of `imperative` programming in [FP](https://en.wikipedia.org/wiki/Functional_programming)?

In `FP` we don't engage in details. If booleans are details then what is the purpose of using them? True/False are intermediate temporary products we use to **choose** between two way of doing things (branch). After all everything in `FP` is  `Function`, even `True` and `False`.

```js
const result = boolean ? first : second
```

In that sense a `boolean` is a pair of functions that select either first or second choice base on the type of function (Function that returns `first` argument or the `second` if two parameters are given, aka True/False). In `Sanctuary` the function that always returns first argument is `K` and the function that always returns the second is `K(I)`. Why?

`I` is **Identity** function and returns its argument. Since `K(x)(y)` always returns its first argument `x` so we have:

```math
K(I)(x) === I
```

Both sides are equals and functions so we can apply them to a value and they should be equal:

```math
K(I)(x)(y) === I(y)
```

So `K(I)` always returns the second argument. using Sanctuary we have:

```js
const S = require('sanctuary')

// Given two arguments, always return first
const K = S.K
console.log(K(1)(2)) // 1
console.log(K('first')('second')) // first

// Given two arguments, always return second
const KI = S.K(S.I)  // const KI = a => b => b
console.log(KI(1)(2)) // 2
console.log(KI('first')('second')) // second
```

Now we have our Boolean. `K (True)` and `KI (False)` and can do logical operations. Let's start with `negation (!)`. **Negation** is a function that receives a boolean and returns the opposite boolean:

```math
NOT(True) === False
NOT(False) === True
```

But we have `K (True)` and `KI (False)` so `NOT` applied to `K` should result in `KI` and vice versa. `NOT` function takes a boolean and tells the boolean (K or KI) select your opposite:

```js
const NOT = b => b(KI)(K)
```

So we can build `NOT` out of `S.K` and `S.I`:

```js
// Negation
const T = K  // True
const F = KI // False
const NOT = b => b(F)(T)
console.log(NOT(T)('T')('F')) // False
console.log(NOT(F)('T')('F')) // True
```

We don't need that since Sanctuary already has a NOT function: `S.not`

```js
console.log(S.not(false)) // true
console.log(S.not(true))  // false
```

Back to `FP`, our `NOT` function takes a binary function (function which takes two arguments) and swaps the arguments:

```js
const KI = S.flip(S.K)
const K = S.flip(KI)
const T = K  // True
const F = KI // False
const NOT = b => b(F)(T)
console.log(NOT(T)('T')('F')) // False
console.log(NOT(F)('T')('F')) // True
```
