import { AppState } from './../index';
export const getAnswers = (state: AppState) => {
  return state.answers.items;
};

export const isAnswersLoading = (state: AppState) => state.answers.loading;