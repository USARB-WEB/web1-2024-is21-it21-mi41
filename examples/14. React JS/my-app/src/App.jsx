import './App.css';
import { useState } from 'react';

function App() {
  const x = 1;
  const y = 2;

  const persons = [
    { name: 'John', age: 20 },
    { name: 'Jane', age: 22 },
    { name: 'Jim', age: 25 },
  ];


  const [name, setName] = useState('Sergiu');

  function changeName(event) {
    setName(event.target.value);
    console.log(name);
  }


  return (
    <div>
      <div> x = { x }</div>
      <div> y = { y }</div>
      <div> x + y = { x + y }</div>
      <hr />
      <div>
        <ul>
          { persons.map(person => <li>{ person.name } - { person.age }</li>) }  
        </ul>
      </div>
      <hr />
      <div>
        <label htmlFor="">Input your name</label>
        <input type="text" value={ name } onInput={changeName} />
        <br />
        Hello { name }
        <br />
        Reversed name { name.split('').reverse().join('') }
      </div>
    </div>
  );
}

export default App;
