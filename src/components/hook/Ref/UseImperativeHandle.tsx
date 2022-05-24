//custom input component

import React, { useImperativeHandle } from 'react';
import { useRef } from 'react';

interface Props {
  name?: string;
  type?: string;
}

export default function UseImperativeHandle() {
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
      <button onClick={() => inputRef?.current?.focus()}>포커스</button>
    </div>
  );
}

const CustomInput = React.forwardRef((props: Props, ref: any) => {
  useImperativeHandle(ref, () => ({
    customFocus: () => {
      ref.current.focus();
    },
  }));

  return <input name={props.name} type={props.type} ref={ref}></input>;
});
