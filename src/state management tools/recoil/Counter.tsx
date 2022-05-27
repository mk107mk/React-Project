import { useRecoilState, useRecoilValue } from 'recoil';
import Atom from './Atom';

export default function Recoil() {
  const [count, setCount] = useRecoilState(Atom);
  return (
    <div>
      <h1>Recoil</h1>
      <button onClick={() => setCount(count + 1)}>증가</button>
      <button onClick={() => setCount(count - 1)}>감소</button>
      <ChildComponent />
      <ChildComponent2 />
    </div>
  );
}

function ChildComponent() {
  const [count, setCount] = useRecoilState(Atom);
  //  state 객체
  return (
    <div>
      <button onClick={() => setCount(count * 2)}>x2 증가</button>
    </div>
  );
}

function ChildComponent2() {
  const count = useRecoilValue(Atom);
  // state 값
  return <div>{count}</div>;
}
