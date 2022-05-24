import { useState } from 'react';

interface Props {
  name: string;
  age: number;
  job: string;
}

export function BeforeContext() {
  return (
    <div className="App">
      <FirstComponent name={'kim'} age={20} job={'student'} />
    </div>
  );
}

function FirstComponent(props: Props) {
  return (
    <div>
      <h5>first component: {props.name}</h5>
      <SecondComponent name={props.name} age={props.age} job={props.job} />
    </div>
  );
}

function SecondComponent(props: Props) {
  return (
    <div>
      <h5>second component: {props.age}</h5>
      <ThirdComponent name={props.name} age={props.age} job={props.job} />
    </div>
  );
}

function ThirdComponent(props: Props) {
  return (
    <div>
      <h5>third compoenent: {props.job}</h5>
      <ComponentNeedingProps
        name={props.name}
        age={props.age}
        job={props.job}
      />
    </div>
  );
}

function ComponentNeedingProps(props: Props) {
  return (
    <>
      <div>
        <span>이름 : {props.name} </span>
        <span>나이 : {props.age} </span>
        <span>직업 : {props.job} </span>
      </div>
    </>
  );
}
