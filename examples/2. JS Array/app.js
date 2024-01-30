console.log('Very poor realisation of average mark calculator');
let mark1 = 8;
let mark2 = 10;
let mark3 = 8;
let mark4 = 9;
let mark5 = 6;

const average = (mark1 + mark2 + mark3 + mark4 + mark5) / 5;

console.log(average);

console.log('Better realisation of average mark calculator');
const marks = [8, 10, 8, 9, 6, 6, 10, 10, 9, 7, 8];
let sum = 0;
for (let i = 0; i < marks.length; i++) {
  sum += marks[i];
}
const averageMark = sum / marks.length;
console.log(averageMark);

console.log('Array functions');

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers);
console.log('Number of elements in array: ' + numbers.length);

console.log('Add element to the end of array');
numbers.push(10);
console.log(numbers);
console.log('Number of elements in array: ' + numbers.length);

console.log('Add element to the beginning of array');
numbers.unshift(100);
console.log(numbers);
console.log('Number of elements in array: ' + numbers.length);

console.log('Remove element from the end of array');
numbers.pop();
console.log(numbers);
console.log('Number of elements in array: ' + numbers.length);

console.log('Remove element from the beginning of array');
numbers.shift();
console.log(numbers);
console.log('Number of elements in array: ' + numbers.length);

console.log('Remove element from the middle of array');
numbers.splice(3, 1);
console.log(numbers);
console.log('Number of elements in array: ' + numbers.length);

console.log('Add element to the middle of array');
numbers.splice(3, 0, 777);
console.log(numbers);
console.log('Number of elements in array: ' + numbers.length);


console.log('Sum of array elements');
console.log(numbers.reduce((sum, current) => sum + current, 0));

console.log('Square of array elements');
console.log(numbers.map((element) => element * element));


const integerNumbers = [1, -5, 0, 4, 6, 8, 9, 10, 11, -12, 13, -14, 15];
console.log('Array of integer numbers');
console.log(integerNumbers);
console.log('Array of positive integer numbers');
console.log(integerNumbers.filter((element) => element > 0));

