// useMemo
// 메모리제이션된 값을 반환한다

import { useState, useMemo } from 'react';
import styled from 'styled-components';

interface Props {
  name: string;
  color: string;
}
export function UseMemo() {
  const [name, setName] = useState('');
  const [color, setColor] = useState('');

  function onChangeHandler(e: any) {
    if (e.target.id === 'name') setName(e.target.value);
    else setColor(e.target.value);
  }
  return (
    <div className="App">
      <label>
        (useMemo) 이름:
        <input id="name" value={name} onChange={onChangeHandler} />
      </label>
      색깔:
      <label>
        <input
          name="color"
          type="radio"
          id="color"
          value={'red'}
          onChange={onChangeHandler}
        />
        빨강
      </label>
      <label>
        <input
          name="color"
          type="radio"
          id="color"
          value={'blue'}
          onChange={onChangeHandler}
        />
        파랑
      </label>
      <label>
        <input
          name="color"
          type="radio"
          id="color"
          value={'green'}
          onChange={onChangeHandler}
        />
        초록
      </label>
      <label>
        <input
          name="color"
          type="radio"
          id="color"
          value={'yellow'}
          onChange={onChangeHandler}
        />
        노랑
      </label>
      <Info name={name} color={color} />
    </div>
  );
}

function Info(props: Props) {
  const [nameCount, setNameCount] = useState(0);
  const [colorCount, setColorCount] = useState(0);
  function getName(props: any) {
    console.log('getName');
    setNameCount(nameCount + 1);
    return props;
  }

  function getColor(props: any) {
    setColorCount(colorCount + 1);
    console.log('getColor');

    return props;
  }

  const useName = useMemo(() => getName(props.name), [props.name]);
  const useColor = useMemo(() => getColor(props.color), [props.color]);

  return (
    <div>
      <Div>
        <Name color={useColor}> {useName}</Name>
      </Div>
      <h5>getName count : {nameCount}</h5>
      <h5>getColor count : {colorCount}</h5>
    </div>
  );
}
const Div = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const Name = styled.div`
  width: 100px;
  height: 50px;
  vertical-align: center;
  background: ${props => props.color || 'gray'};
`;
