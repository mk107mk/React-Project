import { useEffect, useState } from 'react';

export function ControlledInput(props: { loading: boolean }) {
  const [value, setValue] = useState('');
  const [value2] = useState('');
  const [value3] = useState('');

  useEffect(() => {
    if (props.loading) {
      return;
    }
    console.log('asadsasd');
  }, [props.loading]);

  if (props.loading) {
    return <>{value2}</>;
  }
  return (
    <div>
      <input value={value} onChange={e => setValue(e.target.value)} />
      <input value={value + 'abc'} onChange={e => setValue(e.target.value)} />

      <p>{value}</p>
      <Child
        value2={'abcd'}
        onClick={value => {
          setValue(value);
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
      <div>{props.value2}</div>
    </>
  );
}
