/* eslint-disable prettier/prettier */
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '.';
import { State } from './reducer';

export default function Redux() {
  const dispatch = useDispatch();

  const { increaseCount, decreaseCount } = bindActionCreators(actionCreators, dispatch);

  return (
    <div>
      <h1>{'Redux'}</h1>
      <button onClick={() => increaseCount()}>증가</button>
      <button onClick={() => decreaseCount()}>감소</button>
      <ChildComponent />
      <ChildComponent2 />
    </div>
  );
}

function ChildComponent() {
  //  state 객체
  const dispatch = useDispatch();
  const { multipleCount } = bindActionCreators(actionCreators, dispatch);
  return (
    <div>
      <button onClick={() => multipleCount()}>x2 증가</button>
    </div>
  );
}

function ChildComponent2() {
  const count = useSelector((state: State) => state.count);
  return <div>{count}</div>;
}
