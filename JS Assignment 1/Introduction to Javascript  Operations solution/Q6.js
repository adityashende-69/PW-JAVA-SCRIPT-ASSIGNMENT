// code for calculating body mass index
function calculateBMI(weight, height)

{
    return weight / (height * height);
}

const weightInkg = 70;
const heightINmeters = 2.00;

const BMI = calculateBMI(weightInkg, heightINmeters);
console.log("body mass index (BMI):" , BMI);