import { createContext, useContext, useState } from 'react';

interface state {
  name: string;
  age: number;
  job: string;
  value: string;
  setValue: (value: string) => void;
}
const userContext = createContext<state | null>(null);

export function AfterContext() {
  const [state, setState] = useState('');
  return (
    <userContext.Provider
      value={{
        name: 'kim',
        age: 20,
        job: 'student',
        value: state,
        setValue: setState,
      }}
    >
      <div className="App">
        <FirstComponent />
      </div>
    </userContext.Provider>
  );
}

function FirstComponent() {
  return (
    <div>
      <SecondComponent />
    </div>
  );
}

function SecondComponent() {
  return (
    <div>
      <ThirdComponent />
    </div>
  );
}

function ThirdComponent() {
  return (
    <div>
      <ComponentNeedingProps />
    </div>
  );
}

function ComponentNeedingProps() {
  const context = useContext(userContext)!;
  return (
    <>
      <div>
        <span>이름 : {context.name} </span>
        <span>나이 : {context.age} </span>
        <span>직업 : {context.job} </span>
        <br />
        <button
          onClick={() => {
            context.setValue('새로운 값');
          }}
        >
          버튼
        </button>
        <h5>state : {context?.value}</h5>
      </div>
    </>
  );
}
