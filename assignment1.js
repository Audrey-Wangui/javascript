// Reaserch and come up with examples on objest and Array data types. Show how to access items of the object and array

// Object data type : It is a complex data typethat allows you toenter several key-value pairs which include other data types or even objects
// Object data types are mutable(can be changed), can used dot or bracket notation

let car ={
    name : "bronco",
    colour : "blue",
    car_type : "SUV",
};

// Retrieving values is done through the following methods:
// Dot notation
console.log(car.name);

// Bracket notation
console.log(car["name"]);

// Array data type
// It is used to store an ordered collection of values and makes use of indexes and can be changed
let clothes = ["shirt", "pants", "shoes", "skirt", "blouse", "sweater"];


// Retriving values from an array

console.log(clothes[1]);
console.log(clothes.slice(0, 5));
