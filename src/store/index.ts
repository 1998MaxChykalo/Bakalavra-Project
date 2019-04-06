
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { rootReducer } from './reducers';
import User from '../models/User';
import Answer from '../models/Answer';

export interface AppState {
  adjacencyMatrix: number[][],
  users: User[],
  answers: Answer[]
};

export const store = createStore(
  rootReducer
)