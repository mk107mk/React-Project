//useMamo
import { useState } from 'react';
import styled from 'styled-components';
export function ChanageThema() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = slowFunction(number);
  return (
    <>
      <input
        type="number"
        value={number}
        onChange={e => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark(!dark)}>Change Thema</button>
      <Div>{doubleNumber}</Div>
    </>
  );
}

function slowFunction(num: number) {
  console.log('Calling Slow Function');
  for (let i = 0; i <= 100; i++) {
    console.log('c');
  }
  return num;
}

const Div = styled.div`
  background-color: ${dark => (dark ? 'black' : 'white')};
  color: ${dark => (dark ? 'white' : 'black')};
`;
