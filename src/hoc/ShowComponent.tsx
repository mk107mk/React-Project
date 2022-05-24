import { useState } from 'react';
import { ButtonComponent } from './ButtonComponent';
import { InputComponent } from './InputComponent';
import { WithHoc } from './WtihHoc';

const BtnWithLoading: any = WithHoc(ButtonComponent);
const InputWithLoading: any = WithHoc(InputComponent);

export function ShowComponent() {
  const [btnState, btnSetState] = useState(true);
  const [inputState, inputSetState] = useState(true);
  const [btn, setBtn] = useState('생성');
  const [input, setInput] = useState('생성');

  const changeStateBtn = () => {
    btnSetState(!btnState);
    btn == '생성' ? setBtn('제거') : setBtn('생성');
  };
  const changeStateInput = () => {
    inputSetState(!inputState);
    input == '생성' ? setInput('제거') : setInput('생성');
  };
  return (
    <div>
      <button onClick={changeStateBtn}>버튼 컴포넌트 {btn} </button>
      <BtnWithLoading isLoading={btnState} />
      <br />
      <button onClick={changeStateInput}>input 컴포넌트 {input}</button>
      <InputWithLoading isLoading={inputState} />
    </div>
  );
}
