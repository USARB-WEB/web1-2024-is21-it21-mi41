

// Classic function
function sum(a, b) {
    return a + b;
}

console.log(sum(2, 3));
console.log(sum(4, 5));
console.log(sum(6, 7));

// Anonymous function
const sum2 = function (a, b) {
    return a + b;
}

console.log(sum2(2, 3));
console.log(sum2(4, 5));
console.log(sum2(6, 7));

// Arrow function
const sum3 = (a, b) => {
    return a + b;
}
console.log(sum3(2, 3));
console.log(sum3(4, 5));
console.log(sum3(6, 7));

// Arrow function with one line
const sum4 = (a, b) => a + b;

console.log(sum4(2, 3));
console.log(sum4(4, 5));
console.log(sum4(6, 7));

// Arrow function with one line and one parameter
const circleArea = r => Math.PI * r * r;
console.log(circleArea(5));
console.log(circleArea(10));
console.log(circleArea(15));