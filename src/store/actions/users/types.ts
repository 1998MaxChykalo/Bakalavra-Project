import User from "../../../models/User";

export enum UsersActionKeys {
  FETCH_USERS_BEGIN = 'FETCH_USERS_BEGIN',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE',
};

export interface FetchUsersBeginAction {
  readonly type: UsersActionKeys.FETCH_USERS_BEGIN;
}

export interface FetchUsersSuccessAction {
  readonly type: UsersActionKeys.FETCH_USERS_SUCCESS;
  readonly payload: User[];
}

export interface FetchUsersFailureAction {
  readonly type: UsersActionKeys.FETCH_USERS_FAILURE;
  readonly payload: string;
}


export type UsersActionTypes = FetchUsersBeginAction
  | FetchUsersSuccessAction
  | FetchUsersFailureAction;
