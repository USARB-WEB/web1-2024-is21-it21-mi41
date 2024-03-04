import './App.css';
import React, { StrictMode, useEffect, useState } from 'react';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentSuperEffect from './components/ComponentSuperEffect';

function App() {
  
  const [showComponentA, setShowComponentA] = useState(false);
  const [showComponentB, setShowComponentB] = useState(false);

  useEffect(() => {
    console.log('App component rerendered');
  });

  return (
    <StrictMode>
      <h1>useEffect Hook</h1>
      <hr />
      <button onClick={() => setShowComponentA(!showComponentA)}>Toggle Component A</button>
      <button onClick={() => setShowComponentB(!showComponentB)}>Toggle Component B</button>
      <hr />
      {showComponentA && <ComponentA/>}
      {showComponentB && <ComponentB/>}
      <ComponentSuperEffect/>
    </StrictMode>
  );
}

export default App;
