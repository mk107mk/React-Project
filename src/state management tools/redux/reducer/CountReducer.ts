import { ActionType } from '../action-types';
import { Action } from '../actions';

const initialState = 0;

export default function reducer(state: number = initialState, action: Action) {
  switch (action.type) {
    case ActionType.INCREASE:
      return state + 1;
    case ActionType.DECREASE:
      return state - 1;
    case ActionType.MULTIPLE:
      return state * 2;
    default:
      return state;
  }
}
