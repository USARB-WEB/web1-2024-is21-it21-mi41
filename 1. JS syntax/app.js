console.log("Hello from app.js");
let r = 2.5;
const pi = 3.14;

let area = pi * r ** 2;

console.log(area);

let i = 0;


console.log('FOR LOOP');
for (let i = 0; i <= 3; i++) {
    console.log(i);
}

console.log('WHILE LOOP');

while (i <= 3) {
    console.log(i);
    i++;
}

console.log('DO WHILE LOOP');
i = 0;
do {
    console.log(i);
    i++;
} while (i <= 3);


const x = 15;
const y = 15;

if (x > y) {
    console.log('x is greater than y');
} else if (x < y) {
    console.log('x is less than y');
} else {
    console.log('x is equal to y');
}


const digit = 10;

switch (digit) {
    case 0:
        console.log('Zero');
        break;
    case 1:
        console.log('One');
        break;
    case 2:
        console.log('Two');
        break;
    case 3:
        console.log('Three');
        break;
    case 4:
        console.log('Four');
        break;
    case 5:
        console.log('Five');
        break;
    case 6:
        console.log('Six');
        break;
    case 7:
        console.log('Seven');
        break;
    case 8:
        console.log('Eight');
        break;
    case 9:
        console.log('Nine');
        break;
    default:
        console.log('Unknown digit');
        break;
}

function solveQuadraticEquation(a, b, c) {
    let x1 = null;
    let x2 = null;
    const delta = b ** 2 - 4 * a * c;
    if (delta > 0) {
        x1 = (-b + Math.sqrt(delta)) / (2 * a);
        x2 = (-b - Math.sqrt(delta)) / (2 * a);
        console.log(`x1 = ${x1} and x2 = ${x2}`);
    } else if (delta === 0) {
        x1 = -b / (2 * a);
        console.log(`x1 = ${x1}`);
    } else {
        console.log('No solution');
    }
}

solveQuadraticEquation(1, 2, 1);
solveQuadraticEquation(1, -1, -2);
solveQuadraticEquation(1, 1, 1);
solveQuadraticEquation(1, -7, 12);