import {
  AnswersActionKeys,
  FetchAnswersBeginAction,
  FetchAnswersSuccessAction,
  FetchAnswersFailureAction
} from "./types";
import Answer from "../../../models/Answer";
import { ApiService } from "../../../api";

export const fetchAnswersBegin = (): FetchAnswersBeginAction => ({
  type: AnswersActionKeys.FETCH_ANSWERS_BEGIN
});

export const fetchAnswersSuccess = (
  answers: Answer[]
): FetchAnswersSuccessAction => ({
  type: AnswersActionKeys.FETCH_ANSWERS_SUCCESS,
  payload: answers
});

export const fetchAnswersFailure = (
  error: string
): FetchAnswersFailureAction => ({
  type: AnswersActionKeys.FETCH_ANSWERS_FAILURE,
  payload: error
});

export const fetchAnswers = () => (dispatch: any) => {
  dispatch(fetchAnswersBegin());
  return ApiService.fetchAnswers()
    .then(answers => {
      dispatch(fetchAnswersSuccess(answers));
      return answers;
    })
    .catch(error => dispatch(fetchAnswersFailure(error)));
};
