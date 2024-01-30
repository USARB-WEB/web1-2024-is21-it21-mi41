const personWrong = [
    "Ion",
    "Creanga",
    "Iasi",
    "+37312345678",
    "01.03.1837",
    "31.12.1889",
    "01.03.1850"
]

console.log(personWrong);
console.log("Name:" + personWrong[0]);
console.log("Surname:" + personWrong[1]);
console.log("City:" + personWrong[2]);
console.log("Phone:" + personWrong[3]);
console.log("Birth:" + personWrong[4]);
console.log("Death:" + personWrong[5]);
console.log("First book:" + personWrong[6]);

const person = {
    name: "Ion",
    surname: "Creanga",
    adress: {
        city: "Iasi",
        street: "Stefan cel Mare",
        house: "1",
        flat: "2",
        floor: "3"
    },
    phone: "+37312345678",
    birth: "01.03.1837",
    death: "31.12.1889",
    firstBook: "01.03.1850"
}
console.log(person);
console.log("Name:" + person.name);
console.log("Surname:" + person.surname);
console.log("City:" + person.adress.city);
console.log("Street:" + person.adress.street);
console.log("House:" + person.adress.house);
console.log("Flat:" + person.adress.flat);
console.log("Phone:" + person.phone);
console.log("Birth:" + person.birth);
console.log("Death:" + person.death);
console.log("First book:" + person.firstBook);


console.log('Destructorization');
const pc = {
    cpu: 'Intel Core i7',
    ram: '16 GB',
    hdd: '1 TB',
    video: 'NVIDIA GeForce GTX 1050 Ti',
    price: 15000
};

const {cpu, ram, hdd, video, display, price} = pc;
console.log('CPU: ' + cpu);
console.log('RAM: ' + ram);
console.log('HDD: ' + hdd);
console.log('Video: ' + video);
console.log('Price: ' + price);

const laptop = {
    ...pc,
    display: '15.6 Full HD',
}

console.log(laptop);

