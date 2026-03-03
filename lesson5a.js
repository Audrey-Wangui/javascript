// Arrow functions
// This is a function that was intorduced in the ECMA Script 6 and they give us the latest/mordern way of defining functions in a compact manner
// At times the arrow functions can be said to be anonymous functions this is because they use the names of the variables they are contained in.

const sayHello = () => {
    console.log("This is an arrow function")
}

sayHello();

console.log("=========")

// Create an arrow function that is able to find the product of three numbers
const product = (number1, number2, number3) => {
    multiply = number1 * number2 * number3
    console.log("The product is:", multiply)
}
console.log(product(10, 20, 30))