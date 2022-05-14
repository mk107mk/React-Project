import React, { useState, useEffect } from 'react';

export function FunctionalCount() {
  const [count, setCount] = useState(0);

  useEffect(function () {
    const value = setInterval(() => {
      setCount(function (state) {
        return state + 1;
      });
      console.log(count);
    }, 1000);

    return function () {
      clearInterval(value);
    };
  }, []);
  return (
    <>
      <h2>함수형 컴포넌트 숫자 카운트</h2>
      <h4>{count}</h4>
      {count > 10 && <h3>10보다 커짐!!</h3>}
    </>
  );
}
