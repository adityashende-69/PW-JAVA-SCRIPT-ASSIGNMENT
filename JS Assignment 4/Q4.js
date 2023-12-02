function calculateTax()
{
    let taxRates = [{range  : 1000,  range : 0.1}, {range : 3000, rate : 0.05}]


return function (income){
    let applicableRate = taxRates.find(function(rate){
        return income <= rate.range;

    });
    return income * applicableRate.rate;
};
}

letcalculateTaxForIncome = calculateTax();


console.log(calculateTaxForIncome(1000));
console.log(calculateTaxForIncome(3000));
