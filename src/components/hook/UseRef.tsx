import { useEffect, useRef, useState } from 'react';

export function UseRef() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const renderCount = useRef(1);
  const inputRef = useRef<HTMLInputElement>(null);

  console.log('렌더링 ... ');

  const increaseState = () => {
    setCount(count + 1);
  };

  const increaseRef = () => {
    countRef.current = countRef.current + 1;
    console.log('Ref :', countRef.current);
  };

  const onFocus = () => {
    inputRef.current?.focus();
  };

  useEffect(() => {
    renderCount.current += 1;
    onFocus();
  });

  return (
    <div className="App">
      <span> state : {count} </span>
      <button onClick={increaseState}>increase State </button>
      <span> ref : {countRef.current} </span>
      <button onClick={increaseRef}>increase Ref </button>
      <span> 렌더링 횟수 : {renderCount.current} </span>
      <br />
      <label>
        focus :
        <input ref={inputRef} type="text" />
      </label>
    </div>
  );
}
