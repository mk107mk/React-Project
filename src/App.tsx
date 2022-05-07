import React, { useState } from 'react';
import './App.css';
import './index.css';
import Functional from './components/Functional';
import Class from './components/Class';
import { ClassCount } from './components/ClassCount';
import { FunctionalCount } from './components/FunctionalCount';

function App() {
  const [key, setState] = useState('key-1');
  // if (condition) {
  //   return <div></div>;
  // }
  return (
    <div>
      <Functional name="함수형" num={1}>
        <div>children1</div>
        <div>children2</div>
      </Functional>

      <Class name="클래스형" num={2}>
        <div>children1</div>
        <div>children2</div>
      </Class>

      <FunctionalCount />
      <ClassCount />
    </div>
  );
}

export default App;
