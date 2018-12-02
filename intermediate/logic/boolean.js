const S = require('sanctuary')

// Given two arguments, always return first
const K = S.K
console.log(K(1)(2)) // 1
console.log(K('first')('second')) // first

// Given two arguments, always return second
const KI = S.K(S.I) // const KI = a => b => b
console.log(KI(1)(2)) // 2
console.log(KI('first')('second')) // second

// Negation
const T = K  // True
const F = KI // False
const NOT = b => b(F)(T)
console.log(NOT(T)('T')('F')) // False
console.log(NOT(F)('T')('F')) // True

// Using Sanctuary built-in NOT
console.log(S.not(false)) // true
console.log(S.not(true))  // false

// Building NOT out of Cardinal function (S.flip)
const KI2 = S.flip(K)
const K2 = S.flip(KI)
const T2 = K2  // True
const F2 = KI2 // False
const NOT2 = b => b(F2)(T2)
console.log(NOT2(T2)('T')('F')) // False
console.log(NOT2(F2)('T')('F')) // True