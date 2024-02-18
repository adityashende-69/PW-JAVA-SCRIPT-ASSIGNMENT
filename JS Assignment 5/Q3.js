function searchCharacterClasses(inputString)
{
    const digitPattern = /\d/g;
    const uppercaseLetterPattern = [A-Z]/g;
    const lowercaseLetterPattern = [a-z]/g;
    const specialCharacterPattern = /[^a - zA-Z0-9]/g;
}


const digitMatches = inputString.match(digitPattern) || [];
  const uppercaseLetterMatches = inputString.match(uppercaseLetterPattern) || [];
  const lowercaseLetterMatches = inputString.match(lowercaseLetterPattern) || [];
  const specialCharacterMatches = inputString.match(specialCharacterPattern) || [];
  return {
    digits: digitMatches,
    uppercaseLetters: uppercaseLetterMatches,
    lowercaseLetters: lowercaseLetterMatches,
    specialCharacters: specialCharacterMatches,
  };
const inputString = "NO money $ honey";
const result = searchCharacterClasses(inputString);
console.log("Digits:", result.digits); 
console.log("Uppercase Letters:", result.uppercaseLetters); 
console.log("Lowercase Letters:", result.lowercaseLetters); 
console.log("Special Characters:", result.specialCharacters); 