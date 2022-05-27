import countStore from './store';
import { observer, useObserver } from 'mobx-react';

function Counter() {
  return (
    <div>
      <h1>Mobx</h1>
      <button
        onClick={() => {
          countStore.increase();
        }}
      >
        증가
      </button>
      <button
        onClick={() => {
          countStore.decrease();
        }}
      >
        감소
      </button>
      <ChildComponent />
      <ChildComponent2 />
    </div>
  );
}

function ChildComponent() {
  //  state 객체
  return useObserver(() => (
    <div>
      <button onClick={() => countStore.multiple()}>x2 증가</button>
    </div>
  ));
}

function ChildComponent2() {
  return useObserver(() => <div>{countStore.number}</div>);
}

export default observer(Counter);
