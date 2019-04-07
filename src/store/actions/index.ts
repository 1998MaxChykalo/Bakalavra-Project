import User from "../../models/User";

export enum SociologyActionKeys {
  UPDATE_ADJACENCY_MATRIX = 'UPDATE_ADJACENCY_MATRIX',
  UPDATE_USERS = 'UPDATE_USERS',
};

export interface UpdateAdjacencyMatrixAction {
  readonly type: SociologyActionKeys.UPDATE_ADJACENCY_MATRIX;
  readonly payload: number[][];
}

export interface UpdateUsersAction {
  readonly type: SociologyActionKeys.UPDATE_USERS;
  readonly payload: User[];
}


export type SociologyActionTypes = UpdateAdjacencyMatrixAction
  | UpdateUsersAction;


export const updateAdjacencyMatrix = (newMatrix: number[][]) => ({
  type: SociologyActionKeys.UPDATE_ADJACENCY_MATRIX,
  payload: newMatrix
});

export const updateUsers = (newUsers: User[]) => ({
  type: SociologyActionKeys.UPDATE_USERS,
  payload: newUsers
});