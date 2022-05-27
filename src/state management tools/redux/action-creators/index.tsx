import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action } from '../actions';

export const increaseCount = (number: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.INCREASE,
      payload: number,
    });
  };
};

export const decreaseCount = (number: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.DECREASE,
      payload: number,
    });
  };
};

export const mutipleCount = (number: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.MULTIPLE,
      payload: number,
    });
  };
};
