import React, { useEffect } from 'react';
import { useState } from 'react';
import { ReactNode } from 'react';

interface Props {
  name?: string;
  num?: number;
  children?: ReactNode;
}
function Functional(props: Props) {
  const [date, setDate] = useState('');

  function getDate() {
    const date = new Date();
    const year = String(date.getFullYear());
    const month = String(date.getMonth() + 1);
    const day = String(date.getDate());
    const hour = String(date.getHours());
    const minute = String(date.getMinutes());
    const second = String(date.getSeconds());

    return `${year}년 ${month}월 ${day}일 ${hour}시 ${minute}분 ${second}초`;
  }

  useEffect(function () {
    const value = setInterval(function () {
      setDate(state => {
        return getDate();
      });
    }, 1000);

    return function () {
      clearInterval(value);
    };
  }, []);

  return (
    <>
      <h2>함수형 컴포넌트</h2>
      <h4>시간출력 : {date}</h4>
      <h4>
        Props : {props.name}, {props.num}
      </h4>
      <div>
        <h4>wrapper :</h4> {props.children}
      </div>
    </>
  );
}

export default Functional;
