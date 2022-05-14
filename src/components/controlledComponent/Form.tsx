import React, { HtmlHTMLAttributes, useEffect, useState } from 'react';

export function Form() {
  const [value, setValue] = useState('');
  const [value2, setValue2] = useState('');

  return (
    <div>
      <form onSubmit={() => alert(`입력값 : ${value}`)}>
        <input onChange={e => setValue(e.target.value)} />

        <button type="submit">제출</button>
        <p>입력값 : {value}</p>
      </form>

      <Child
        value2={value2}
        onClick={value => {
          setValue2(value);
        }}
      />
    </div>
  );
}

function Child(props: { value2: string; onClick: (v: string) => void }) {
  return (
    <>
      <button
        onClick={() => {
          props.onClick('1');
        }}
      >
        1
      </button>
      <button
        onClick={() => {
          props.onClick('2');
        }}
      >
        2
      </button>
      <button
        onClick={() => {
          props.onClick('3');
        }}
      >
        3
      </button>
      <div>{`버튼 클릭 값 : ${props.value2}`}</div>
    </>
  );
}
