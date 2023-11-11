/* 1. precedence:
Precedence determines the order of operations when an expression contains multiple operators. 
Higher precedence operators are executed before lower precedence operators. For instance, multiplication
has a higher precedence than addition, so in an expression like 3 + 5 * 2, the multiplication will be 
performed first due to its higher precedence.
*/
// example:
let result = 3 + 5 * 10 ;
// answer is 53 first operation 5 * 10 is done after that 50 + 3 = 53 operation done.


/* 2. Associativity:
Associativity comes into play when operators of the same precedence appear in an expression. 
It defines the direction in which operations are evaluated. Some operators are left-associative
(evaluated from left to right) while others are right-associative (evaluated from right to left).
*/

// let result =  8 / 2 / 2;

// for Right associative operators:
// let result = 2 ** 3 ** 2;
// it gives  evaluate first 3 ** 2 and after that it will evaluate 2 ** 