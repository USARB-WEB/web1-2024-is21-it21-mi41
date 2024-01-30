alert('Hello. I am an alert box created in JS!')

const name = prompt('What is your name?')

alert(`Hello ${name}. Nice to meet you!`)

const knowJS = confirm('Do you know JavaScript?')
if (knowJS) {
  alert('Great!')
} else {
    alert('You should learn it!')
}


while(!confirm('Vrei sa primesti nota 2?')) {
    alert("Wow! You are so smart!")
}