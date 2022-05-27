import { combineReducers } from 'redux';
import { countReducer } from './CountReducer';

const reducers = combineReducers({
  count: countReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
