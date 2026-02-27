// Object data type
// An object in java script is a data type that stores data in form of key-value bearers
let person = {
    name : "Audrey",
    age : 18,
    isRegistered : true
};
console.log("Details of the person is", person);

// First method is by use of the square brackets
console.log(person["age"]);

// Second method is by use of dot(.) notation
console.log(person.name);
console.log(typeof(person));

// Array data type:
// This  referes to a collection of items that are of indexes
fruits = ["mango", "pinaapple", "apple", "banana", "melon", "lemon", "grapes"]
console.log("The entire array of fruits is", fruits);

// To access the items in an array we use indexes
console.log(fruits[3]);

//You can slice items in an array
console.log(fruits.slice(2, 5))