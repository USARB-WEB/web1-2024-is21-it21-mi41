document.getElementById('calculateButton').addEventListener('click', () => {
    const x = document.getElementById('x').value;
    const y = document.getElementById('y');

    const result = x / y;

    if (!isFinite(result)) {
        document.getElementById('result').innerHTML = 'Cannot divide by 0';
        return;
    }

    if (isNaN(result)) {
        document.getElementById('result').innerHTML = 'Please enter valid numbers';
        return;
    }

    document.getElementById('result').innerHTML = result;
})


// try {

//     alert('Start of try runs');  // (1) <--

//     lalala; // error, variable is not defined!

//     alert('End of try (never reached)');  // (2)

// } catch (err) {

//     alert(`Error has occurred!`); // (3) <--

// }

// alert('Start of try runs'); 
// lalala; // error, variable is not defined!
// alert('End of try (never reached)');  // (2)
// alert(`Error has occurred!`); // (3) <--
