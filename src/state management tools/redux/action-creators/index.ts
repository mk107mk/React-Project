import { ActionType } from '../action-types';
import { Dispatch } from 'redux';

export const increaseCount = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ActionType.INCREASE,
      //   payload: 1,
    });
  };
};

export const decreaseCount = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ActionType.DECREASE,
      //   payload: 1,
    });
  };
};

export const multipleCount = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ActionType.MULTIPLE,
      //   payload: 2,
    });
  };
};
