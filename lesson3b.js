// While loop
// Below is the syntax of the while loop
// 1. Initialization of a variable
// 2. While key word
// 3. Condition to be checked
// 4. Body of while loop

let i = 0;
while(i <= 10) {
    console.log("The new value of i is:",i)
    i++
}

console.log("======")
// Come up with a js example of map loop

let numbers =[1, 2, 3, 4];
let doubled =numbers.map(number => number**2);
console.log(doubled)
