import { Action } from '../actions/index';
import { ActionType } from '../action-types';

const initialState = 0;

export const countReducer = (state: number = initialState, action: Action) => {
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
};
