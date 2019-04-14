import usersReducer, { initialUsersState } from './usersReducer';
import { SociologyActionTypes, SociologyActionKeys } from './../actions/index';
import { AppState } from "..";
import { combineReducers } from '../../../node_modules/@types/react-redux/node_modules/redux';
import answersReducer, { initialAnswersState } from './answersReducer';

const initialState: AppState = {
  users: initialUsersState,
  answers: initialAnswersState,
  adjacencyMatrix: []
}

export const reducer = (state: AppState = initialState, action: SociologyActionTypes) => {
  switch (action.type) {
    case SociologyActionKeys.UPDATE_ADJACENCY_MATRIX:
      return {
        ...state,
        adjacencyMatrix: action.payload
      }
    case SociologyActionKeys.UPDATE_USERS:
      return {
        ...state,
        users: action.payload
      }
    default:
      return state;
  }
}

export const rootReducer = combineReducers({ answers: answersReducer, users: usersReducer });