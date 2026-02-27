// Create a for loop that is able to print out all the leap years from 2000 to 2026
let year = 2000
while(year <= 2026) {
    if (year % 4 == 0) 
    console.log(year)
    year++
}

console.log("======")
// Write a for loop to all odd numbers from 1 to 19
for(number = 1; number <=19; number += 2) {
    console.log(number)
}
 console.log("=====")

// Write a for loop to count down from 10 to 1 and print the numbers in the console
for(count = 10; count >= 1; count -= 1) {
    console.log(count)
}

console.log("======")
// Write a for loop to find the largest number in the array: [10, 20, 4, 45, 99, 1]

const numbers = [10, 20, 4, 45, 99, 1]
let max = numbers[0];
for(const num of numbers) {
if (num > max) {
    max = num;
 }
}
console.log("The largest number is: ", max)

console.log("=============")

//Write a for loop to print the multiplication table of 5 from 5x1 to 5x10
for (m = 1; m <= 10; m ++) {
    let answer = 5*m
    console.log("5 * " + m + "= " + answer)
}

console.log("=======")

// Come up with a program that will store some gross salary in variables. Then using if..else...else ifstatements determine the monthly contribution one will pay

let gross_salary = 50000
if (gross_salary < 5999) {
    console.log("Monthly contribution: 150.00", )
}

else if ((gross_salary >= 6000) && (gross_salary <= 7999)) {
    console.log("Monthly contribution: 300.00")
}

else if ((gross_salary >= 8000) && (gross_salary <= 11999)) {
    console.log("Monthly contribution: 400.00")
}

else if ((gross_salary >= 12000) && (gross_salary <= 14999)) {
    console.log("Monthly contribution: 500.00")
}

else if ((gross_salary >= 15000) && (gross_salary <= 19999)) {
    console.log("Monthly contribution: 600.00")
}

else if ((gross_salary >= 20000) && (gross_salary <= 24999)) {
    console.log("Monthly contribution: 750.00")
}

else if ((gross_salary >= 25000) && (gross_salary <= 29999)) {
    console.log("Monthly contribution: 850.00")
}

else if ((gross_salary >= 30000) && (gross_salary <= 49999)) {
    console.log("Monthly contribution: 1000.00")
}

else if ((gross_salary >= 50000) && (gross_salary <= 99999)) {
    console.log("Monthly contribution: 1500.00")
}

else {
    console.log("Monthly contribution: 2000.00")
}

// Research on arrow functions, functions with parameters and anonymous functions in javascript

// Arrow functions
// It's a mordern way of writimg functions and makes use of an arrow (=>)

