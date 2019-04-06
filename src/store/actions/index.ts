
export enum SociologyActionKeys {
  UPDATE_ADJACENCY_MATRIX = 'UPDATE_ADJACENCY_MATRIX'
};

export interface UpdateAdjacencyMatrixAction {
  readonly type: SociologyActionKeys.UPDATE_ADJACENCY_MATRIX;
  readonly payload: number[][];
}

export type SociologyActionTypes = UpdateAdjacencyMatrixAction;


export const updateAdjacencyMatrix = (newMatrix: number[][]) => ({
  type: SociologyActionKeys.UPDATE_ADJACENCY_MATRIX,
  payload: newMatrix
});