/* Bad implementation */
class Animal{
    constructor(type, color){
        this.type = type
        this.color = color
    }

    eat(){
        if(this.type === 'dog'){
            console.log('The dog is eating bones');
        } else if(this.type === 'cat'){
            console.log('The cat is eating fish');
        }
    }
}

const firstAnimal = new Animal('dog', 'pink');
const secondAnimal = new Animal('cat', 'blue');

console.log(firstAnimal.type, firstAnimal.color);
firstAnimal.eat();
console.log('-------------------');
console.log(secondAnimal.type, secondAnimal.color);
secondAnimal.eat();
console.clear();

/* Correct implementation using inheritance */
console.log('-------------------');

class AbstractAnimal{
    constructor(type, color){
        this.type = type
        this.color = color
    }

    eat(){
        console.log('The animal is eating');
    }
}

class Dog extends AbstractAnimal{
    constructor(color){
        super('dog', color);
    }

    eat(){
        console.log('The dog is eating bones');
    }
}

class Cat extends AbstractAnimal{
    constructor(color){
        super('cat', color);
    }

    eat(){
        console.log('The cat is eating fish');
    }
}

const cat = new Cat('blue');
const dog = new Dog('pink');
console.log(cat.type, cat.color);
cat.eat();
console.log(dog.type, dog.color);
dog.eat();

const animals = [
    new Cat('blue'),
    new Dog('pink'),
    new Cat('green'),
    new Dog('red'),
    new Cat('yellow'),
    new Dog('black'),
    new Cat('white'),
    new Dog('orange'),
    new Cat('purple'),
    new Dog('gray'),
    new Cat('brown')
];


animals.forEach(animal => {
    console.log(animal.type, animal.color);
    animal.eat();
});