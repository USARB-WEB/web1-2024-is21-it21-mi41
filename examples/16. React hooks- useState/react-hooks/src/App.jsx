import './App.css';
import React, { useState } from 'react';

function App() {
  let x = 2;
  let y = 3;


  const [a, setA] = useState(2);
  const [b, setB] = useState(3);


  const decrementX = () => {
    x--;
    console.log(x);
  }

  const incrementX = () => {
    x++;
    console.log(x);
  }

  const decrementA = () => {
    setA(a - 1);
  }

  const incrementA = () => {
    setA(a + 1);
  }


  // setInterval(() => {
  //   console.log(b);
  //   //setB(b => b + 1);
  //   setB(b + 1);
  //   console.log(b);
  // }, 500);

  const [userName, setUserName] = useState("React");
  // setTimeout(() => {
  //   //userName = "React Hooks";
  //   setUserName("React Hooks");
  //   console.log(userName);
  // }, 1000);

  const handleInputChange = (event) => {
    console.log(event.target.value);
    setUserName(event.target.value);
    console.log(userName);
  }



  return (
    <>
      <h1>React Hooks</h1>
      <h2>Use JS variables</h2>
      <div>
        <h2>Sum of {x} and {y} is {x + y}</h2>
      </div>
      <div>
        <button onClick={decrementX}>x--</button>
        <button onClick={incrementX}>x++</button>
      </div>
      
      <h2>Use React hook useState</h2>
      <div>
        <h2>Sum of {a} and {b} is {a + b}</h2>
      </div>
      <div>
        <button onClick={decrementA}>a--</button>
        <button onClick={incrementA}>a++</button>
      </div>
      <h2>Two way data binding</h2>
      <input type="text" value={userName} onInput={(event) => handleInputChange(event)} />
    </>
  );
}

export default App;
