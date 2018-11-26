const S = require('sanctuary')

/*
dropLast
Returns a copy of input array without N last elements, if possible.
Since there may not be such an array, return type is a `Maybe`
which can be either a `Just` or a `Nothing`.
*/
const result = S.dropLast(3)([1, 2, 3, 4, 5, 6, 7, 8, 9])
console.log(result) // Just ([1, 2, 3, 4, 5, 6])

/*
fromMaybe
Tries to extract inner value of `Just` from inside a `Maybe`.
First parameter of function is the default value to return
in case there is `Nothing` in `Maybe` type.
*/
const output = S.fromMaybe([])(result)
console.log(output) // [1, 2, 3, 4, 5, 6]


// trying to drop last 12 elements of an array with 9 elements results in Nothing (impossible).
const resultEmpty = S.dropLast(12)([1, 2, 3, 4, 5, 6, 7, 8, 9])
console.log(resultEmpty) // Nothing
// Used default value of [100, 200] in case fromMaybe tries to extract Nothing.
const outputEmpty = S.fromMaybe([100, 200])(resultEmpty)
console.log(outputEmpty) // [100, 200]

/*
unchecked
Sanctuary type checking forces you to use a default value of the same type
of array elements. If this is not intended you can bypass type checking by
using `unchecked`.
*/
const outputEmptyUnchecked = S.unchecked.fromMaybe('Drop last impossible')(resultEmpty)
console.log(outputEmptyUnchecked) // Drop last impossible
