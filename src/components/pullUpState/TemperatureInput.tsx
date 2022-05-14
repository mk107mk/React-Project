import { useState } from 'react';

interface Props {
  //scale : 'c' | 'f';
  scale: string;
}

export function TemperatureInput(props: Props) {
  // record 객체의 타입을 정의
  const scaleNames: Record<string, string> = {
    c: 'Celsius',
    f: 'Fahrenheit',
  };
  const [temp, setTemp] = useState('');

  return (
    <div>
      <span>온도입력({scaleNames[props.scale]}) : </span>
      <span>({props.scale})</span>
      <input value={temp} onChange={e => e.target.value} />
    </div>
  );
}
