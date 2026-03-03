// Arrow functions
// It's a concise way to write functions and makes use of an arrow (=>)
// Mostly used for simple functions that are used once

// Without parameters
const hello = () => console.log("Hello")
hello()

// With parameters
const hi = (name) => console.log("Hello", name)
hi("Audrey")

const add = (a, b) => a + b
console.log (add (20, 30))

// Modules in Javascript
// Its a way of separating codes in different files to make them easy to reuse, organize and maintain
// There are two types:

// 1. ES Module
// Below is some block of code:
// const divide = (x, y) => x / y

// // Now we export this
// export{divide}

// // Alternatively:

// export const branch = (x, y) => x / y

// 2. CommonJS - Node.js(older system)
// Its sturucture is; module.exports  require()

const minus = (c, d) => c - d
module.exports = {minus}
