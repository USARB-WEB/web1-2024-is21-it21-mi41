const person = {
    name: 'John',
    age: 30,
    children: ['Anna', 'Peter'],
    address: {
        street: '123 Main St',
        city: 'New York'
    }
};

console.log(person);


const personJSON = JSON.stringify(person);
console.log(personJSON);

const personOnBackend = JSON.parse(personJSON);
console.log(personOnBackend);

const testJsonWrongFormatted = '{';
const testJsonWrongFormattedOnBackend = JSON.parse(testJsonWrongFormatted);
console.log(testJsonWrongFormattedOnBackend);