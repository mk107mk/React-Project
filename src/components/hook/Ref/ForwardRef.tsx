//custom input component

import React from 'react';
import { useRef } from 'react';

interface Props {
  name?: string;
  type?: string;
}

export default function ForwardRef() {
  const inputRef = useRef<HTMLInputElement>(null);
  const submitRef = useRef(null);

  const submitKeyDown = () => {
    alert('inputRef.name: ' + inputRef?.current?.name);
  };

  return (
    <div>
      <CustomInput name="CustomInput" type="text" ref={inputRef} />
      <button ref={submitRef} onClick={submitKeyDown}>
        제출
      </button>
    </div>
  );
}

// 커스텀 컴포넌트는 ref 속성이 없다
// forwardRef를 이용해서 ref를 전달 받는다
const CustomInput = React.forwardRef((props: Props, ref: any) => {
  return <input name={props.name} type={props.type} ref={ref}></input>;
});
