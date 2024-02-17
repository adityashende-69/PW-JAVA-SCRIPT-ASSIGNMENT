// 1 sort and find min and max in array
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()
console.log(ages)
const minAges = ages[0];
const maxAges = ages[ages.length - 1];
console.log( "min",minAges);
console.log("max" ,maxAges);

// 2 find median age
let medianAge;
const middleIndex = Math.floor(ages.length / 2);
if (ages.length % 2 === 0) {
    medianAge = (ages[middleIndex - 1] + ages[middleIndex]) / 2; 
} else {
    medianAge = ages[middleIndex];
 }
console.log("medianAges", minAges)

// 3 find average age
const averageAge = ages.reduce((acc,age)=> acc + age, 0) / ages.length;
  console.log("average age", averageAge)

// 4 range of the ages 
  const ageRange = maxAges - minAges;
  console.log("range of the ages",ageRange);

// 5 use abs() menthod 

const minAveregeDiff = Math.abs(minAges - averageAge)
const maxAverageDiff = Math.abs(maxAges - averageAge)
console.log("min - avearge", minAveregeDiff);
console.log("max - avearge", maxAverageDiff);