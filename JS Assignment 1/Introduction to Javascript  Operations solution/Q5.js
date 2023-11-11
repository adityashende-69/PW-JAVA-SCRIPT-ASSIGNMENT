// code for simple interst calculation

function calculateSimpleInterest(principal, rate , time)
{
    let simpleInterest = (principal * rate * time ) / 100;
    return simpleInterest;
}
let principalAmount = 100000;
let interestRate = 50;
let timePeriod = 20;


let interest = calculateSimpleInterest (principalAmount, interestRate, timePeriod);
console.log('Simple Interest:' , interest)