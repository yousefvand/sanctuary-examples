const S = require('sanctuary')

// `S.head`
// Returns the first element of array if possible.
// Since there may not be a first element, return type is a `Maybe`
//  which can be either a `Just` or a `Nothing`
const result = S.head([1, 2, 3])
console.log(result) // Just (1)

// `S.fromMaybe`
// Tries to extract inner value of `Just` inside a `Maybe`.
// First parameter of function is the default value to return
// in case there is `Nothing` in `Maybe`
const output = S.fromMaybe(0)(result)
console.log(output) // 1

// Now with empty array

const resultEmpty = S.head([])
console.log(resultEmpty) // Nothing
const outputEmpty = S.fromMaybe(0)(resultEmpty)
console.log(outputEmpty) // 0

// If you need a default value of other types than array, use `S.unchecked`
const outputEmptyUnchecked = S.unchecked.fromMaybe('Array is empty')(resultEmpty)
console.log(outputEmptyUnchecked) // Array is empty
