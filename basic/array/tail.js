const S = require('sanctuary')

/*
tail
Ignores the first element of an array and return the remaining elements if possible.
Since there may not be rest element(s), return type is a `Maybe`
which can be either a `Just` or a `Nothing`.
*/
const result = S.tail([1, 2, 3])
console.log(result) // Just ([2, 3])

/*
fromMaybe
Tries to extract inner value of `Just` from inside a `Maybe`.
First parameter of function is the default value to return
in case there is `Nothing` in `Maybe` type.
*/
const output = S.fromMaybe([])(result)
console.log(output) // [ 2, 3 ]

// Now with an empty array

const resultEmpty = S.tail([])
console.log(resultEmpty) // Nothing
const outputEmpty = S.fromMaybe([])(resultEmpty)
console.log(outputEmpty) // []

/*
unchecked
Sanctuary type checking forces you to use a default value of the same type
of array elements. If this is not intended you can bypass type checking by
using `unchecked`.
*/
const outputEmptyUnchecked = S.unchecked.fromMaybe('Array is empty')(resultEmpty)
console.log(outputEmptyUnchecked) // Array is empty
