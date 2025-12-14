// empty array
const names: string[] = [];

// array literal
const fruits: string[] = ['apple', 'banana', 'strawberry']; // 0 1 2

// array consrtuctor
const numbers: number[] = new Array(1, 2, 3, 4, 5);

console.log(fruits[1]);

fruits[2] = 'cherry';
console.log(fruits);

// add value at the begining of an array
numbers.unshift(0);
console.log(numbers[0]);

// add value at the end of an array
numbers.push(6);
console.log(numbers[numbers.length - 1]);

// remove value at the begining of an array
numbers.shift();
console.log(numbers[0]);

// remove value at the end of an array
numbers.pop();
console.log(numbers[numbers.length - 1]);

// this create new array from the starting point until last point - 1
const slicedArray = numbers.slice(1, 5);
console.log(slicedArray);

// filters an array
const filteredArray = numbers.filter((num) => num > 4);
console.log(filteredArray);

// readonly array
const readOnlyArray: readonly string[]=['Mahmoud','Ahmed'];
// readOnlyArray[1]= 'Mohamed';  Error!