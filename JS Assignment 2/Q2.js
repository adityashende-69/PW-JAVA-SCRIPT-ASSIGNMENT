/*In JavaScript, the comma operator allows you to evaluate multiple expressions, separating them with a comma.
 It's typically used in situations where multiple expressions need to be executed, but only the result of the 
 last expression is used.
*/
// example
let a = 1, b = 2, c = 3;

for(let i = 0, j = 10; i < j; i++, j--)
{
    console.log('i: ${i}, j: ${j}');
}

/* n the first line, multiple variable declarations are separated by commas. In the 'for' loop, both the initialization
 and increment sections use the comma operator to execute multiple expressions. The loop increments 'i' and decrements 'j' 
 simultaneously.
 */