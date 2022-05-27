// interface Action {
//   type: string;
//   payload?: number;
// } // error -> 개체가 undefined인 것 같습니다
import { ActionType } from '../action-types';

interface IncreaseAction {
  type: ActionType.INCREASE;
  payload: number;
}
interface DecreaseAction {
  type: ActionType.DECREASE;
  payload: number;
}
interface MultipleAction {
  type: ActionType.MULTIPLE;
  payload: number;
}
export type Action = IncreaseAction | DecreaseAction | MultipleAction;
