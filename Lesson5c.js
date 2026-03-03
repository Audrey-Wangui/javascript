// Exporting modules
// We export modules so that we can use them in other files/modules in our programme.

export const calculator = (x, y) => {
    let difference = x -y
    console.log("The difference of the two number is: ", difference)
};


export const simpleinterest = (principle, rate, time) => {
    let si = (principle * rate * time) / 100
    console.log("The simple interest gained is: ", si)
};

const BMI = (weight, height)=> {
    let answer = weight / (height ** 2)
    console.log("The BMI of the person is : ", answer, "Kg/m\u00b2")
};

export{BMI};
