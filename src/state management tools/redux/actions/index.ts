import { ActionType } from '../action-types';

interface IncreaseAction {
  type: ActionType.INCREASE;
}

interface DecreaseAction {
  type: ActionType.DECREASE;
  // payload: number;
}

interface MultipleAction {
  type: ActionType.MULTIPLE;
  // payload: number;
}

export type Action = IncreaseAction | DecreaseAction | MultipleAction;
