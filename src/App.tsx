import React, { useState } from 'react';
import './App.css';
import './index.css';
// import Functional from './components/Functional';
// import Class from './components/Class';
// import { ClassCount } from './components/ClassCount';
// import { FunctionalCount } from './components/FunctionalCount';
// import { Toggle } from './components/Toggle';
// import { Map } from './components/Map';
// import { Test } from './components/Lifecycle';
// import { Array } from './components/ArrayRendering';
// import { ControlledInput } from './components/ControlledInput';
// import { ContextExample } from './components/ContextExample';
// import { Form } from './components/controlledComponent/Form';
// import { Onclick } from './components/Props,State';
// import Textarea from './components/controlledComponent/Textarea';
// import { Select } from './components/controlledComponent/Select';
// import { Calculator } from './components/pullUpState/Calculator';
// import { Children } from './components/composition/Children';
// import { User } from './components/composition/specialization/User';
// import { Admin } from './components/composition/specialization/Admin';
// import { ContextExample } from './components/hook/useContext/ContextExample';
// import { BeforeContext } from './components/hook/useContext/BeforeContext';
// import { AfterContext } from './components/hook/useContext/AfterContext';
// import { UseMemo } from './components/hook/UseMemo';
// import { UseCallback } from './components/hook/UseCallback';
// import { Specialization } from './components/composition/specialization/Speciialization';
// import { UseRef } from './components/hook/Ref/UseRef';
// import { ShowComponent } from './hoc/ShowComponent';

// import { ChanageThema } from './components/hook/ChageThema';
// import CustomInput from './components/hook/Ref/ForwardRef';
// import ForwardRef from './components/hook/Ref/ForwardRef';
// import UseImperativeHandle from './components/hook/Ref/UseImperativeHandle';
import Example from './components/hook/Example';

function App() {
  const [key, setState] = useState('key-1');
  // if (condition) {
  //   return <div></div>;
  // }

  return (
    <div>
      {/* <Functional name="함수형" num={1}>
        <div>children1</div>
        <div>children2</div>
      </Functional>

      <Class name="클래스형" num={2}>
        <div>children1</div>
        <div>children2</div>
      </Class>

      <FunctionalCount />
      <ClassCount />

      <Toggle />
      <Map />
      <Test />
      <Array />
      <ControlledInput />
      <ContextExample />
      <BeforeContext />
      <AfterContext />
      <Form />
      <Onclick />
      <Textarea />
      <Select />
      <Calculator />
      <Children />
      <Specialization />
      <UseMemo />
      <br />
      <UseCallback />
      <br />
      <UseRef />
      <Calculator />
      <ShowComponent /> */}
      <Example />
      {/* <ChanageThema /> */}
      {/* <ForwardRef /> */}
      {/* <UseImperativeHandle /> */}
    </div>
  );
}

export default App;
