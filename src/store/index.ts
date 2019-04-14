import { UsersState } from './reducers/usersReducer';
import { AnswersState } from './reducers/answersReducer';

import { createStore, applyMiddleware, combineReducers } from 'redux'
import { rootReducer } from './reducers';
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
export interface AppState {
  adjacencyMatrix: number[][],
  users: UsersState,
  answers: AnswersState;
};

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)