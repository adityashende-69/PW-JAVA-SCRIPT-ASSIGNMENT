function testRegex(pattern , inputString){
    const regex =  new RegExp(pattern);
      
    return regex.test(inputString);
}
const patternA = /hello/;
const stringA = "Hello";
console.log(testRegex(patternA, stringA));

const pattern1 = /\d/;
const string1 = "the number is 100.";
console.log(testRegex(pattern1,string1));