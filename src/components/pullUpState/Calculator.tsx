import React from 'react';
import { useEffect, useRef, useState } from 'react';

export function Calculator() {
  const [temp, setTemp] = useState('0');
  const [state, setState] = useState('');
  const inputRef = useRef(null);
  useEffect(() => {
    setTimeout(function () {
      console.log('현재 input ref:' + inputRef.current);
    }, 5000);
  });
  return (
    <div>
      <TempInput ref={inputRef} value={state} onChange={setState} />
      <TempInput />
    </div>
  );
}
const TempInput = React.forwardRef(function TempInput(props: any, ref) {
  return (
    <input
      ref={ref}
      value={props.value}
      type="text"
      onChange={e => props.onChange(e.target.value)}
    />
  );
});

//withErrorBoundary
