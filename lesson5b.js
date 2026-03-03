// Arrow functions with parameters
const greet = (name) => {
    console.log("Hello " + name + ". How have you been? I trust that you are good.")
}
greet("Audrey");
greet("Wangui");


// Example 2
console.log("==========")

// below is a function to find the area of a circle
const pi = 3.142
const CircleArea = (pi, radius) => {
    
    let area = pi * (radius ** 2)
    console.log("The area of the circle is: " + area + "cm\u00b2")
};
CircleArea(pi, 7);
CircleArea(pi, 28);

console.log("=======")
// Come up with your own example of an arrow function that utilizes 3 parameters

const VolumeCuboid = (length, width, height) => {
    let vol = length * width * height
    console.log("The volume of the cuboid is: ", vol)
};

VolumeCuboid(20, 30, 40);
VolumeCuboid(50, 60, 70);