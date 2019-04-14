import {
  UsersActionKeys,
  FetchUsersBeginAction,
  FetchUsersSuccessAction,
  FetchUsersFailureAction
} from "./types";
// import User from "../../../models/User";
import { ApiService } from "../../../api";
import User from "../../../models/User";

export const fetchUsersBegin = (): FetchUsersBeginAction => ({
  type: UsersActionKeys.FETCH_USERS_BEGIN
});

export const fetchUsersSuccess = (
  Users: User[]
): FetchUsersSuccessAction => ({
  type: UsersActionKeys.FETCH_USERS_SUCCESS,
  payload: Users
});

export const fetchUsersFailure = (
  error: string
): FetchUsersFailureAction => ({
  type: UsersActionKeys.FETCH_USERS_FAILURE,
  payload: error
});

export const fetchUsers = () => (dispatch: any) => {
  dispatch(fetchUsersBegin());
  return ApiService.fetchUsers()
    .then(users => {
      dispatch(fetchUsersSuccess(users));
      return users;
    })
    .catch(error => dispatch(fetchUsersFailure(error)));
};
