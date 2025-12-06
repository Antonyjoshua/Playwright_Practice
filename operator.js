// operator.js
// A concise set of examples demonstrating common JavaScript operators.

// 1) Arithmetic operators
let a = 10;
let b = 3;
console.log('Arithmetic:');
console.log('a + b =', a + b);
console.log('a - b =', a - b);
console.log('a * b =', a * b);
console.log('a / b =', a / b);
console.log('a % b =', a % b);
console.log('a ** b =', a ** b);

// Increment / decrement (prefix vs postfix)
let inc = a;
console.log('\nIncrement / Decrement:');
console.log('postfix (inc++) ->', inc++); // prints 10, then inc becomes 11
console.log('now inc =', inc);
inc = a;
console.log('prefix (++inc) ->', ++inc); // increments, then prints 11

// 2) Assignment operators
let x = 5;
x += 3; // x = 8
x *= 2; // x = 16
console.log('\nAssignment operators: x =', x);

// 3) Comparison operators
console.log('\nComparison:');
console.log("'5' == 5 ->", '5' == 5);   // true (type coercion)
console.log("'5' === 5 ->", '5' === 5); // false (strict equality)
console.log('5 != "5" ->', 5 != '5');
console.log('5 !== "5" ->', 5 !== '5');
console.log('a > b ->', a > b, 'a < b ->', a < b);

// 4) Logical operators and short-circuiting
console.log('\nLogical:');
console.log('true && false ->', true && false);
console.log('true || false ->', true || false);
console.log('!true ->', !true);

// Short-circuit behavior (returns operand value)
console.log('0 && "no" ->', 0 && 'no'); // 0 is falsy, returned
console.log('"" || "default" ->', '' || 'default'); // returns 'default'

// 5) Ternary operator
console.log('\nTernary:');
console.log(a > b ? 'a is greater' : 'b is greater');

// 6) typeof and instanceof
console.log('\nType checks:');
console.log('typeof a ->', typeof a);
console.log('typeof null ->', typeof null); // historical quirk: 'object'
class Person {}
const p = new Person();
console.log('p instanceof Person ->', p instanceof Person);

// 7) Bitwise operators
console.log('\nBitwise:');
console.log('5 | 1 ->', 5 | 1);
console.log('5 & 1 ->', 5 & 1);
console.log('5 ^ 1 ->', 5 ^ 1);
console.log('~5 ->', ~5);

// 8) Nullish coalescing and optional chaining
const obj = { nested: { val: 0 } };
console.log('\nOptional chaining and nullish coalescing:');
console.log('obj?.nested?.val ->', obj?.nested?.val);
console.log('null ?? "fallback" ->', null ?? 'fallback');
console.log('0 ?? "fallback" ->', 0 ?? 'fallback'); // 0 is NOT nullish

// 9) String concatenation and template literals
console.log('\nStrings:');
console.log('"Hello" + " World" ->', 'Hello' + ' World');
console.log('template ->', `a=${a}, b=${b}`);

// 10) Operator precedence example
console.log('\nPrecedence: 1 + 2 * 3 ->', 1 + 2 * 3); // 7

// Feel free to run this file with Node.js: `node operator.js`

