import Answer from "../../../models/Answer";

export enum AnswersActionKeys {
  FETCH_ANSWERS_BEGIN = 'FETCH_ANSWERS_BEGIN',
  FETCH_ANSWERS_SUCCESS = 'FETCH_ANSWERS_SUCCESS',
  FETCH_ANSWERS_FAILURE = 'FETCH_ANSWERS_FAILURE',
};

export interface FetchAnswersBeginAction {
  readonly type: AnswersActionKeys.FETCH_ANSWERS_BEGIN;
}

export interface FetchAnswersSuccessAction {
  readonly type: AnswersActionKeys.FETCH_ANSWERS_SUCCESS;
  readonly payload: Answer[];
}

export interface FetchAnswersFailureAction {
  readonly type: AnswersActionKeys.FETCH_ANSWERS_FAILURE;
  readonly payload: string;
}


export type AnswersActionTypes = FetchAnswersBeginAction
  | FetchAnswersSuccessAction
  | FetchAnswersFailureAction;
