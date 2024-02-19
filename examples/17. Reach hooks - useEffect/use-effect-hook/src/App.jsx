import './App.css';
import React, { useEffect, useState } from 'react';

function App() {

  const [x, setX] = useState(2);

  useEffect(() => {
    setX(x + 1);
  }, []) // execute only once on component mount


  const [n , setN] = useState(1);
  const [m , setM] = useState(1);
  useEffect(() => {
    console.log("n changed", n);
    if(n % 2 === 0) {
      setM(m + 1);
    }
  }, [n]) // execute on component mount and whenever n changes

  setTimeout(() => {
    setN(n + 1);
  }, 1000)

  return (
    <>
      <h1>useEffect Hook</h1>
      <div>
        <span>X=</span>
        <span>{x}</span>
      </div>
      <hr />
      <div>
        n = {n}
      </div>

      {
        n % 2 === 0 && <div>This dis is showed just if n id odd</div>
      }

      <div>m = {m}</div>
    </>
  );
}

export default App;
