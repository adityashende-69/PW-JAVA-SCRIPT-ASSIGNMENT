/*  
1. arithmatic operators: 
example: addition '+' , substaction '-' , multiplication '*' , division '/'
2. Comparison Operators:
Compare values and return a Boolean (true or false) based on the comparison.
Examples: === (strict equality), !== (strict inequality), > (greater than), < (less than), >= (greater than or equal to), <= (less than or equal to).
Logical Operators:
3. Perform logical operations on values and return a Boolean.
Examples: && (logical AND), || (logical OR), ! (logical NOT).
4. Assignment Operators:
Assign values to variables or objects.
Examples: = (assignment), += (addition assignment), -= (subtraction assignment), *= (multiplication assignment), /= (Division assignment).
5. Unary Operators:
Operate on a single operand.
Examples: ++ (increment), -- (decrement), typeof (returns the data type), - (unary negation).
6. Bitwise Operators:
Perform operations on binary representations of numbers.
Examples: & (bitwise AND), | (bitwise OR), ^ (bitwise XOR), << (left shift), >> (right shift), >>> (unsigned right shift).
7. Ternary Operator (Conditional Operator):
A conditional operator that assigns a value to a variable based on a condition.
Example: condition ? value1 : value2
8. String Operators:
Concatenate or manipulate strings.
Example: + (concatenation).
9. Type Operators:
Check the type of a value or extract specific types.
Example: instanceof (checks if an object is an instance of a specific object type).
10. Comma Operator:
Evaluates multiple expressions and returns the result of the last expression.
Example: , (comma operator).
*/


// arithmetic operators
let a = 4 + 7;
let b = 11 - 4;
let c = 6 * 2;
let d = 20 / 2;

// logical operators
console.log(true && false)
console.log(true || false)


//assignment operators
let x= 6; 
x += 3;

// unary operators
let y = 7;
console.log(++y);

// String operators
let str = "sahil"  + "shubham" ;

// ternary operators
let age = 20;
let  candrink = age >= 21 ?
"yes"  :  "no" ;

// comparison oprators
console.log(10 > 5);
console.log(4 !== 3);