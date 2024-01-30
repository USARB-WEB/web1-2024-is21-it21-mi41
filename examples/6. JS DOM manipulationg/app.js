document.addEventListener('DOMContentLoaded', () => {
    document.body.style.backgroundColor = 'green';
})

document.addEventListener('click', () => {
    document.body.style.backgroundColor = 'red';
})

setTimeout(() => {
    document.body.style.backgroundColor = 'yellow';
}, 5000)

setInterval(() => {
    document.body.style.backgroundColor = 'blue';
}, 3000)


const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple', 'orange', 'brown', 'black', 'white'];

setInterval(() => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}, 10000)


document.getElementById('hideMeBtn').addEventListener('click', () => {
    document.getElementById('hideMeBtn').remove();
})

document.getElementById('cloneMeBtn').addEventListener('click', () => {
    const newButton = document.createElement('button');
    newButton.innerText = 'I am a clone';
    document.body.appendChild(newButton);
})


document.getElementById('reversedInput').addEventListener('input', (event) => {
    const reversedInput = event.target.value.split('').reverse().join('');
    document.getElementById('reversedText').innerHTML = reversedInput;
})


const mario = document.getElementById('mario');

document.body.addEventListener('keydown', (event) => {
    const key = event.key;
    console.log(key);
    if(key === 'ArrowUp') {
        mario.style.top = (mario.offsetTop - 10) + 'px';
        mario.style.transform = 'rotate(0deg)';
    } else if(key === 'ArrowDown') {
        mario.style.top = (mario.offsetTop + 10) + 'px';
        mario.style.transform = 'rotate(180deg)';
    } else if(key === 'ArrowLeft') {
        mario.style.left = (mario.offsetLeft - 10) + 'px';
        mario.style.transform = 'rotate(270deg)';
    } else if(key === 'ArrowRight') {
        mario.style.left = (mario.offsetLeft + 10) + 'px';
        mario.style.transform = 'rotate(90deg)';
    }
})
