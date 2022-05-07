import React, { useState, useEffect } from 'react';

export function FunctionalCount() {
  const [count, setCount] = useState(0);

  useEffect(function () {
    const value = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    return function () {
      clearInterval(value);
    };
  }, []);
  return (
    <>
      <h2>함수형 컴포넌트 숫자 카운트</h2>
      <h4>{count}</h4>
      <button>클릭</button>
    </>
  );
}
