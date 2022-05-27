import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { State } from './reducers';
import { increaseCount, decreaseCount, mutipleCount } from './action-creators';

type CounterProps = {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onMultiple: () => void;
};

export default function Redux() {
  const dispatch = useDispatch();

  // const { increaseCount, decreaseCount, multipleCount } = bindActionCreators(actionCreators, dispatch);

  const onIncrease = () => {
    dispatch();
  };

  const onDecrease = () => {
    dispatch();
  };

  const onMultiple = () => {
    dispatch();
  };

  return (
    <div>
      <h1>Redux</h1>
      <button onClick={() => increaseCount}>증가</button>
      <button>감소</button>
      <ChildComponent />
      <ChildComponent2 />
    </div>
  );
}

function ChildComponent() {
  //  state 객체
  return (
    <div>
      <button>x2 증가</button>
    </div>
  );
}

function ChildComponent2() {
  const count = useSelector((state: State) => state.count);
  // state 값
  console.log(count);
  return <div>{count}</div>;
}
