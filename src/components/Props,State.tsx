import { useState } from 'react';

interface IProps {
  name: string;
  onClick: (name: string) => void;
  onChange: (name: string) => void;
}

export function Onclick() {
  const [value, setValue] = useState<string>('');
  // useState는  Generics를 사용하지 않아도 타입을 알아서 유추한다, 생략가능
  // 상태가 null일 수도 있거나 까다로운 객체, 배열일 경우 Generics를 활용한다
  // ex) const [value, setValue] = useState<setValue | null>(null);
  // ex) const [value, setValue] = useState<arr[]>([]);
  //
  const onclick = (name: string) => {
    alert(`welcome props : ${name}`);
    alert(`welcome state : ${value} `);
  };

  const onchange = (name: string) => {
    setValue(name);
  };
  return (
    <div>
      <Props name={'props 임의로 변경'} onClick={onclick} onChange={onchange} />
    </div>
  );
}

function Props(props: IProps) {
  const handleClick = () => props.onClick(props.name);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    props.onChange(e.target.value);
  return (
    <div>
      <input onChange={handleChange} />
      <button onClick={handleClick}>click me!</button>
    </div>
  );
}
