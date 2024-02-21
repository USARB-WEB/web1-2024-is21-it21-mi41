const someDate = new Date();
console.log(someDate);

const date = new Date('2021-01-01');
console.log(date);

const date2 = new Date(2021, 0, 1, 12, 13, 14);
console.log(date2);

const birthDate = new Date(2002, 8, 27);
console.log(birthDate);
const today = new Date();
console.log(today);
const age = today - birthDate;
console.log(age);
const years = age / 1000 / 60 / 60 / 24 / 365;
console.log(years);

const startDate = new Date(2023, 1, 8);
console.log(startDate.getTime());
console.log(startDate);
const endDate = startDate.getTime() + 1000 * 60 * 60 * 24 * 30;
console.log(new Date(endDate));


const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const someRandomDate = new Date(2024, 1, 21);
console.log(someRandomDate.getDay());
console.log(daysOfWeek[someRandomDate.getDay()]);

/* ****************** */




let countdownSeconds = 10;
document.getElementById('countdown-timer').innerHTML = countdownSeconds;
const interval = setInterval(() => {
    if (countdownSeconds === 1) {
        clearInterval(interval);
        document.getElementById('countdown-timer').innerHTML = 'Done';
        return;
    }
    countdownSeconds--;
    document.getElementById('countdown-timer').innerHTML = countdownSeconds;
}, 1000);



