// Arithmetic operators
let number1 = 10;
let number2 = 5;
let sum = number1 + number2; // 15
let subtract = number1 - number2; // 5
let product = number1 * number2; // 50
let division = number1 / number2; // 2
let reminder = number1 % (number2-2); // 1


console.log(sum);
console.log(subtract);
console.log(product);
console.log(division);
console.log(reminder);

// Comparison operator

let firstNumber = 5;
let secondNumber = 10;

firstNumber == secondNumber; // is equal
firstNumber === secondNumber; // is strict equal "same value and same data type"
firstNumber != secondNumber; // is not equal
firstNumber > secondNumber;
firstNumber < secondNumber;
firstNumber >= secondNumber;
firstNumber <= secondNumber;

// logical operators

let isTrue = true;
let isFalse = false;

isTrue && isFalse;
isTrue || isFalse;
!isTrue;

// Assignment operator
let num ;
num = 5;

num += 4;
num -= 3;
num *= 4;
num /= 3;
num %= 5;
console.log(num);

// ternary operator
let age = 25;
let message = age>=18 ? 'adult':'minor';
console.log(message);