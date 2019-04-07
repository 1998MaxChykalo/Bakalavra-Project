import { SociologyActionTypes, SociologyActionKeys } from './../actions/index';
import { AppState } from "..";
import { combineReducers } from '../../../node_modules/@types/react-redux/node_modules/redux';

const initialState: AppState = {
  users: [],
  answers: [],
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

export const rootReducer = combineReducers({ root: reducer });