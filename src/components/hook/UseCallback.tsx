// 컴포넌트가 렌더링 된다는 것은 그 함수(컴포넌트)를 호출하여서 실행되는 것을 말한다
// 함수가 실행될 때마다 내부에 선언되어 있던 표현식(변수, 또다른 함수등)도 매번 다시 선언되어 사용된다
// 컴포넌는 자신의 state가 변경되거나, 부모에게서 받는 props가 변경되었을 때마다 리렌더링된다
// 하위 컴포넌트에 최적화 설정을 해주지 않으면 부모에게서 받는 props가 변경되지 않았더라도 리렌더링되는게 기본이다

import { useState, useMemo, useCallback, RefCallback } from 'react';
import styled from 'styled-components';

interface Props {
  name: string;
  color: string;
  callValue: string;
  call: (callback: string) => void;
}
export function UseCallback() {
  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [callback, setCallback] = useState('first callback!');

  //useCallback
  const onChangeHandler = useCallback((e: any) => {
    if (e.target.id === 'name') setName(e.target.value);
    else setColor(e.target.value);
  }, []);

  return (
    <div className="App">
      <label>
        (useCallback) 이름:
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
      <Info name={name} color={color} call={setCallback} callValue={callback} />
    </div>
  );
}

function Info(props: Props) {
  function getName(props: any) {
    console.log('getName');
    return props;
  }

  function getColor(props: any) {
    console.log('getColor');
    return props;
  }

  const useName = useMemo(() => getName(props.name), [props.name]);
  const useColor = useMemo(() => getColor(props.color), [props.color]);

  //useCallback
  const useSetCallback = useCallback(() => {
    console.log('useCallback');
    props.call('change callback');
  }, []);

  return (
    <div>
      <Div>
        <Name color={useColor}> {useName}</Name>
      </Div>
      <button onClick={useSetCallback}>state 변경</button>
      <p>useCallback : {props.callValue}</p>
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
