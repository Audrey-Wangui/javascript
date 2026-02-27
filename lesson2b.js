// Comparison operators
// They usually evaluate to a bolean function
let number1 = 5
let number2 = 10
let number3 = 20

console.log(number1==number2)
console.log(number1 <= number2)
console.log(number1 >= number2)
console.log(number1 > number2)
console.log(number1 < number2)
console.log(number1 != number2)
console.log(number1 != number1)

// Triple equal sign
//  Checks whether both the value and data type are the same
let number4 = "30"

// Both value and data type are correct thus returns true
console.log(number1 === number3)

// The value is correct but data type is wrong thus returns false because number4 is a string instead of an integer
console.log(number1 === number4)

//Logical operators are used to evaluate 2 or more conditions and they also give a bolean answer
// Logical AND (&&). It evaluates the true if and only if all of the conditions/statements are true
console.log((number1 < number2) && (number2 > number1) && (number3 > number2))

// Logical or(||) It evaluates true if one of the conditions is true
console.log((number1 > number2) || (number2 > number1))

// Logical not(!) Itr is used to negate a condition
console.log(!(number1 < number2))