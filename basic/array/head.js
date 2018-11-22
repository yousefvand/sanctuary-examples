const S = require('sanctuary')

/*
head
Returns the first element of an array if possible.
Since there may not be a first element, return type is a `Maybe`
which can be either a `Just` or a `Nothing`.
*/
const result = S.head([1, 2, 3])
console.log(result) // Just (1)

/*
fromMaybe
Tries to extract inner value of `Just` from inside a `Maybe`.
First parameter of function is the default value to return
in case there is `Nothing` in `Maybe` type.
*/
const output = S.fromMaybe(0)(result)
console.log(output) // 1

// Now with empty array

const resultEmpty = S.head([])
console.log(resultEmpty) // Nothing
const outputEmpty = S.fromMaybe(0)(resultEmpty)
console.log(outputEmpty) // 0

/*
unchecked
Sanctuary type checking forces you to use a default value of the same type
of array elements. If this is not intended you can bypass type checking by
using `unchecked`.
*/
const outputEmptyUnchecked = S.unchecked.fromMaybe('Array is empty')(resultEmpty)
console.log(outputEmptyUnchecked) // Array is empty
